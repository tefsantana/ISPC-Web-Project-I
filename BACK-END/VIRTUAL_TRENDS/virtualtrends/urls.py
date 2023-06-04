from django.urls import path
from .views import TallaDeProductoView

urlpatterns = [
    path('talla-de-producto/', TallaDeProductoView.as_view(), name='talle-de-producto')
]