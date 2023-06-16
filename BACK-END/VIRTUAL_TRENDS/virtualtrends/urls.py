from django.urls import path
from .views import FavoritesView, TallaDeProductoView, LoginListView, LoginUpdateView, LoginValidView, ProductListView, ImgProducView, RegistroView, ProductoAlCarritoView, NewsletterView, CrearTallaPersonalizada

urlpatterns = [
    path('talla-de-producto/', TallaDeProductoView.as_view(), name='talle-de-producto'),
    path('login/', LoginListView.as_view(), name='login-list'),
    path('login/<str:email>/', LoginUpdateView.as_view(), name='login-update'),
    path('login/valid/', LoginValidView.as_view(), name='login-valid'),
    path('products/', ProductListView.as_view(), name='product-list'),
    path('product/imgprod/<int:id_prod>/', ImgProducView.as_view(), name='img-prod'),
    path('favorites/<int:dni>/', FavoritesView.as_view(), name='favorites'),
    path('logup/', RegistroView.as_view(), name='usuarios'), 
    path('producto-al-carrito/', ProductoAlCarritoView.as_view (), name='producto-al-carrito'), 
    path('newsletter/', NewsletterView.as_view(), name='newsletter'),
    path('crear-talla-personalizada', CrearTallaPersonalizada.as_view(), name='crear-talla-personalizada')
]