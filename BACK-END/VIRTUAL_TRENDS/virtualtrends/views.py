from django.http import JsonResponse
from django.shortcuts import render
from django.views import View 
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import LoginSerializer, ProductSerializer, ColorProducSerializer, ImgProducSerializer
from rest_framework import status
from .models import Login, Usuario, Productos, ColoresProductos, ImagenesProducto, Colores



from .models import Login
from .serializers import LoginSerializer

# Create your views here.

class ProductosView(View):
    def get(self, request):
        datos = {
            'productos': [{
                'name': 'producto 1',
                'price': 1000
            },
            {
                'name': 'producto 2',
                'price': 2000
            },
            {
                'name': 'producto 3',
                'price': 3000
            }]
        }
        return JsonResponse(datos)
    def post(self, request):
        pass
    def put(self, request):
        pass
    def delete(self, request):
        pass

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

class LoginQueryView(APIView):
    def post(self, request):
        email = request.data.get('email')
        psw = request.data.get('psw')

        try:
            login = Login.objects.get(email=email, psw=psw)
        except Login.DoesNotExist:
            return Response("El email y la contraseña son incorrectos", status=status.HTTP_404_NOT_FOUND)

        usuario = Usuario.objects.get(dni=login.dni_id)
        response_data = {
            'nombre': usuario.nombre,'apellido': usuario.apellido,'dni': usuario.dni
            }
        return Response(response_data)

class ProductListView(APIView):
    def get(self, request):
        products = Productos.objects.all()
        serializer = ProductSerializer(products, many = True)
        return Response(serializer.data)
    
class ColorProducView(APIView):
    def get(self, request, id_prod):
        color = ColoresProductos.objects.filter(id_prod=id_prod)
        a = []
        for obj in color:
            col = obj.id_color.__str__()
            a.append(col)
            response_data = {'colores': a}
        return JsonResponse(response_data)

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