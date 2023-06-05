from django.urls import path
from .views import TallaDeProductoView 
from .views import NewsletterView

urlpatterns = [
    path('talla-de-producto/', TallaDeProductoView.as_view(), name='talle-de-producto'),
    path('newsletter/', NewsletterView.as_view(), name='newsletter'),
]