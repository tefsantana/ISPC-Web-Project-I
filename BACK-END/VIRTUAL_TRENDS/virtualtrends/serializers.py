from rest_framework import serializers
from .models import Login
from .models import Productos, ColoresProductos, ImagenesProducto, Colores

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Login
        fields = ['email', 'psw', 'dni']

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Productos
        fields = ["id_prod", "nombre", "desc", "stock", "precio", "id_cat"]

class ColorProducSerializer(serializers.ModelSerializer):
    class Meta:
        model = ColoresProductos
        fields = ['id_color']

class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Colores
        fields = ['nombre', 'exa']

class ImgProducSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImagenesProducto
        fields = ['img']

