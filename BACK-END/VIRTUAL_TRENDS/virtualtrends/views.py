from django.http import JsonResponse
from django.shortcuts import render
from django.views import View

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
