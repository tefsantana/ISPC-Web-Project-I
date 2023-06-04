from django.urls import path
from .views import TallaDeProductoView, ProductoAlCarritoView

urlpatterns = [
    path('talla-de-producto/', TallaDeProductoView.as_view(), name='talle-de-producto'),
    path('producto-al-carrito/', ProductoAlCarritoView.as_view (), name='producto-al-carrito') 
]