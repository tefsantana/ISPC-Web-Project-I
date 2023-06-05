from django.http import JsonResponse
from django.shortcuts import render, get_object_or_404, redirect
from django.views import View
from .models import Talla, TallaDelProducto, ProductosEnCarrito
from virtualtrends.models import Usuario

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

class TallaDeProductoView(View):
    def get(self, request):
        id_producto = request.GET.get('id_producto')
        tallas_del_producto = TallaDelProducto.objects.filter(id_prod = id_producto)
        tallas = Talla.objects.filter(id_talle__in = tallas_del_producto.values('id_talle'))
        talles_disponibles = list(tallas.values_list('inicial_talle', flat=True))
        return JsonResponse(talles_disponibles, safe=False)


    def post(self, request):
        pass
    def put(self, request):
        pass
    def delete(self, request):
        pass
    


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
    
class ProductoAlCarritoView (View):
    def get (self, request):
        pass
    
    def post (self, request):

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

        response_data = {
            'id_car': id_car
            }
        return JsonResponse(response_data, status=201)


    def put (self, request):
        pass
    def delelte (self, request):
        pass
    