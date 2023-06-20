from rest_framework import serializers
from .models import Categoria, Productos, ColoresProductos, ImagenesProducto, Colores, Login, Favoritos, Usuario
#from django.contrib.auth import get_user_model

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

class FavoriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favoritos
        fields = ['id_prod', 'dni']

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = ['nombre']

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'

""" User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    username = serializers.CharField(required=True)
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['email', 'username', 'password']
        extra_kwargs = {
            'email': {'required': True},
            'username': {'required': True}
        }

    def validate_password(self, value):
        if len(value) < 8:
            raise serializers.ValidationError("La contraseña debe tener al menos 8 caracteres.")
        
        if not any(char.isdigit() for char in value):
            raise serializers.ValidationError("La contraseña debe contener al menos un número.")
        
        return value

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        user = self.Meta.model(**validated_data)
        if password is not None:
            user.set_password(password)
        user.save()
        return user
 """

