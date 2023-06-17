from django.http import JsonResponse
from django.shortcuts import render, get_object_or_404, redirect
from django.views import View
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import  IsAdminUser, AllowAny, IsAuthenticated
from .serializers import CategoriaSerializer, LoginSerializer, ProductSerializer, ImgProducSerializer, FavoriteSerializer
from rest_framework import status
from .models import Categoria, Login, Usuario, Productos, ColoresProductos, ImagenesProducto, Colores, Talla, TallaDelProducto, ProductosEnCarrito, TallesPersonalizados, Carrito, Favoritos, Newsletter
from django.forms.models import model_to_dict
import mercadopago
import json

# Create your views here.

class TallaDeProductoView(View):
    def get(self, request):
        id_producto = request.GET.get('id_producto')
        tallas_del_producto = TallaDelProducto.objects.filter(id_prod = id_producto)
        tallas = Talla.objects.filter(id_talle__in = tallas_del_producto.values('id_talle'))
        talles_disponibles = list(tallas.values_list('inicial_talle', flat=True))
        return JsonResponse(talles_disponibles, safe=False)


    def post(self, request):
        return Response({'message': 'Peticion erronea'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
    def put(self, request):
        return Response({'message': 'Peticion erronea'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
    def delete(self, request):
        return Response({'message': 'Peticion erronea'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
    
class CrearTallaPersonalizada(View):
    def get(self, request):
        return Response({'message': 'Peticion erronea'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
    def post(self, request):
        return Response({'message': 'Peticion erronea'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
    def put(self, request):
        permission_classes = [AllowAny]
        talla = request.data
        dni_entrante = talla['dni']

        talla_personalizada, created = TallesPersonalizados.objects.get_or_create(dni = dni_entrante)
        talla_personalizada.cuello = talla['cuello']
        talla_personalizada.busto = talla['busto']
        talla_personalizada.con_rodilla = talla['conRodilla']
        talla_personalizada.larg_talle = talla['largTalle']
        talla_personalizada.con_cintura = talla['conCintura']
        talla_personalizada.con_cadera = talla['conCadera']
        talla_personalizada.larg_manga = talla['largManga']
        talla_personalizada.con_muneca = talla['conMuneca']
        talla_personalizada.larg_pierna = talla['largPierna']
        talla_personalizada.altura_rodilla = talla['alturaRodilla']

        talla_personalizada.save()

        if created:
            return Response({'message': 'Talle personalizado creado con éxito'}, status=status.HTTP_201_CREATED)
        else:
            return Response({'message':'Talle personalizado actualizado cone éxito'}, status=status.HTTP_200_OK)


    def delete(self, request):
        return Response({'message': 'Peticion erronea'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)


class UsuarioView (View):
    def get (self, request, pk):
        user = get_object_or_404 (Usuario, dni= pk)
        context = {"user": user}
        return render (request, "editar-cuenta.component.html", context)
    
    def post (self, request, pk=None):
        user = get_object_or_404 (Usuario, dni=pk)
        user.nombre = request.POST["nombre"]
        user.apellido = request.POST ["apellido"]
        user.tel_cel = request.POST ["tel"]
        user.dir_calle = request.POST ["dir_calle"]
        user.dir_numero = request.POST ["dir_numero"]
        user.cp = request.POST ["cp"]
        user.ciudad = request.POST ["ciudad"]
        user.provincia = request.POST ["provinica"]
        user.ph = request.POST ["ph"]
        user.save () 
        return redirect ("/")

class UsuariosView(View):
    def get(self, request):
        #Get all the users filtering by their id lvl (2 = user)
        users = Usuario.objects.filter(id_lvl_id = 2)
        #Transform the users to json
        users = list(users.values())
        #Return the json
        return JsonResponse(users, safe=False, json_dumps_params={'ensure_ascii': False})
    
class ProductoAlCarritoView (View):
    def get (self, request):
        return Response({'message': 'Peticion erronea'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
    
    def put (self, request):

        dni = request.data.get('id_usuario')
        try:
            carrito = Carrito.objects.get(dni=dni)
            id_car = carrito.id_car
        except Carrito.DoesNotExist:
            carrito = Carrito.objects.create(dni=dni)
            id_car = carrito.id_car

        producto_en_carrito = ProductosEnCarrito(
            id_prod=request.data.get('id_producto'),
            id_car=id_car,
            cantidad=request.data.get('cantidad'),
            talla=request.data.get('talla'),
            color=request.data.get('color'),
            espersonalizado=request.data.get('personalizado')
        )

        producto_en_carrito.save()

    def post (self, request):
        return Response({'message': 'Peticion erronea'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
    def delete (self, request):
        return Response({'message': 'Peticion erronea'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
    
class LoginListView(APIView):
    def get(self, request):
        logins = Login.objects.all()
        serializer = LoginSerializer(logins, many=True)
        return Response(serializer.data)

class LoginUpdateView(APIView):
    def put(self, request, email):
        try:
            login = Login.objects.get(email=email)
        except Login.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = LoginSerializer(login, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginValidView(APIView):
    def post(self, request):
        email = request.data.get('email')
        psw = request.data.get('psw')

        try:
            login = Login.objects.get(email=email, psw=psw)
        except Login.DoesNotExist:
            return Response({'msj':"El email y la contraseña son incorrectos"}, status=status.HTTP_404_NOT_FOUND)

        usuario = Usuario.objects.get(dni=login.dni_id)
        response_data = {
            'nombre': usuario.nombre,'apellido': usuario.apellido,'dni': usuario.dni, 'menssaje':'OK'
            }
        return Response(response_data)

class ProductListView(APIView):
    def get(self, request):
        products = Productos.objects.all()
        lib = []
        for prod in products:
            color = ColoresProductos.objects.filter(id_prod=prod.id_prod)
            picture = ImagenesProducto.objects.filter(id_prod=prod.id_prod)
            if (Favoritos.objects.filter(id_prod=prod.id_prod)):
                favorite = True
            else:
                favorite = False
            a = []
            b = []
            for obj in color:
                col = obj.id_color.__str__()
                a.append(col)
            for obj2 in picture:
                img = obj2.img
                b.append(img)
            
            lib.append ({
                'id':prod.id_prod, 
                'name': prod.nombre,
                'description':prod.desc,
                'price': prod.precio, 
                'icon': b[0], 
                'pictures': b, 
                'colors': a, 
                'type': prod.id_cat.__str__(),
                'amount': prod.stock,
                'favorite': favorite
                })
        response_data={'products': lib}
        return JsonResponse(response_data, json_dumps_params={'ensure_ascii': False})

class ProductView(APIView):
    def get(self, request, id_prod):
        try:
            product = Productos.objects.get(id_prod=id_prod)
            colors = ColoresProductos.objects.filter(id_prod=id_prod)
            pictures = ImagenesProducto.objects.filter(id_prod=id_prod)
            tallas_del_producto = TallaDelProducto.objects.filter(id_prod=id_prod)
            tallas = Talla.objects.filter(id_talle__in = tallas_del_producto.values('id_talle'))
            talles_disponibles = list(tallas.values_list('inicial_talle', flat=True))
            a = []
            b = []
            for obj in colors:
                col = obj.id_color.__str__()
                a.append(col)
            for obj2 in pictures:
                img = obj2.img
                b.append(img)
            
            lib = {
                'nombre': product.nombre,
                'descripcion':product.desc,
                'precio': product.precio, 
                'imagenes': b, 
                'colores': a, 
                'tallas': talles_disponibles,
                'categoria': product.id_cat.__str__()
            }

        except Productos.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        return Response(lib)

class CategoListView(APIView):
    def get(self, request):
        categorias = Categoria.objects.all()
        serializer = CategoriaSerializer(categorias, many=True)
        categoriasList = []
        for categoria in serializer.data:
            categoriasList.append(categoria['nombre'])
        return Response(categoriasList)
    
class ImgProducView(APIView):
    def get(self, request, id_prod):
        img = ImagenesProducto.objects.filter(id_prod = id_prod)
        serializer = ImgProducSerializer(img, many = True)
        return Response(serializer.data)
    
class RegistroView(APIView):
    def post(self, request):
        dni = request.data.get('dni')
        nombre = request.data.get('nombre')
        apellido = request.data.get('apellido')
        email = request.data.get('email')
        psw = request.data.get('psw')
        tel_cel = request.data.get('tel_cel')
        dir_calle = request.data.get('dir_calle')
        dir_numero = request.data.get('dir_numero')
        cp = request.data.get('cp')
        ciudad = request.data.get('ciudad')
        provincia = request.data.get('provincia')
        ph = request.data.get('ph')

        usuario = Usuario(
            dni=dni, nombre=nombre, apellido=apellido, tel_cel=tel_cel, dir_calle=dir_calle,
            dir_numero=dir_numero, cp=cp, ciudad=ciudad, provincia=provincia, ph=ph
            )
        usuario.save()
        login = Login(email=email, psw=psw, dni=usuario)
        login.save()

        return Response({'mensaje': 'Usuario registrado exitosamente'})

class FavoritesView(APIView):
    def get(self, request, dni):
        favoritos = Favoritos.objects.select_related('id_prod').filter(dni=dni)
        serialized_data = []
        
        for favorito in favoritos:
            listcolor = []
            listimg = []
            colors = ColoresProductos.objects.select_related('id_color').filter(id_prod = favorito.id_prod.id_prod)
            imgs = ImagenesProducto.objects.filter(id_prod = favorito.id_prod.id_prod)
            for color in colors:
                listcolor.append(color.id_color.nombre)
            for img in imgs:
                listimg.append(img.img)
            serialized_data.append({
                'id': favorito.id_prod.id_prod,
                'name': favorito.id_prod.nombre,
                'description': favorito.id_prod.desc,
                'amount': favorito.id_prod.stock,
                'colors': listcolor,
                'img' : listimg,
                'icon': listimg[0],
                'price': str(favorito.id_prod.precio),
                'type': favorito.id_prod.id_cat.id_cat,
                'favorite': True,
            })
            
        return Response(serialized_data)

class NewsletterView (View):
    def post (self, request):
        newsletter = Newsletter()
        newsletter.email = request.POST ["email"]
        newsletter.save()

class ProcessPaymentAPIView(APIView):
    def post(self, request):
        try:
            request_values = json.loads(request.body)
            payment_data = {
                "transaction_amount": float(request_values["transaction_amount"]),
                "token": request_values["token"],
                "installments": int(request_values["installments"]),
                "payment_method_id": request_values["issuer_id"],
                "payer": {
                    "email": request_values["payer"]["email"],
                    "identification": {
                        "type": request_values["payer"]["identification"]["type"],
                        "number": request_values["payer"]["identification"]["number"],
                    },
                },
            }

            sdk = mercadopago.SDK("ACCESS_TOKEN")

            payment_response = sdk.payment().create(payment_data)

            payment = payment_response["response"]
            status = {
                "id": payment["id"],
                "status": payment["status"],
                "status_detail": payment["status_detail"],
            }

            return Response(data={"body": status, "statusCode": payment_response["status"]}, status=201)
        except Exception as e:
            return Response(data={"body": payment_response}, status=400)

class retornarPagado(APIView): # Retornar custom json
    def get(self, request):
        return Response({"respuesta": "aprobado"})
    
class VerUsuarioView(View):
    def get(self, request):
        dniRecibido = request.GET.get('dni')
        usuario = get_object_or_404(Usuario, dni = dniRecibido)  
        return JsonResponse(usuario, status=status.HTTP_200_OK)
    

    def post(self, request):
        return Response({'message': 'Peticion erronea'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
    def put(self, request):
        return Response({'message': 'Peticion erronea'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
    def delete(self, request):
        return Response({'message': 'Peticion erronea'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)