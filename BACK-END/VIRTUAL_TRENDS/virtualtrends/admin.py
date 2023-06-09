from django.contrib import admin
from .models import (
    Carrito, Categoria, ColoresProductos, Compras, Contacto, EnvioDeCompras,
    Pago, Productos, TallesPersonalizados, ImagenesProducto, TallaDelProducto,
    Talla, Envio, Usuario, Niveluser, Favoritos, Login, Newsletter,
    ProductosEnCarrito, Colores
)

admin.site.register(Carrito, list_display=['concretado', 'dni'], list_filter=['concretado'], search_fields=['dni'])
admin.site.register(Categoria, list_display=['nombre'], search_fields=['nombre'])
admin.site.register(ColoresProductos, list_display=('id_color', 'id_prod'), list_filter=['id_color', 'id_prod'])
admin.site.register(Compras, list_display=('id_car', 'id_pago', 'fecha', 'hora', 'estado'), list_filter=['id_car', 'id_pago','fecha','estado'])
admin.site.register(Contacto, list_display=('nombre', 'tel', 'email', 'msj'), list_filter=['email'], search_fields=['email','nombre'])
admin.site.register(EnvioDeCompras, list_display=('id_env','id_comp', 'destino_calle', 'destino_numero'), list_filter=['id_env','id_comp'], search_fields=['id_env','id_comp'])
admin.site.register(Pago, list_display=('nombre', 'desc'), list_filter=['nombre', 'desc'], search_fields=['nombre', 'desc'])
admin.site.register(Productos, list_display=('nombre', 'desc', 'stock', 'precio', 'talle_personalizado', 'eliminar', 'id_cat'), list_filter=['nombre', 'desc', 'stock', 'precio', 'talle_personalizado', 'eliminar', 'id_cat'], search_fields=['nombre', 'desc', 'stock', 'precio', 'talle_personalizado', 'eliminar', 'id_cat'])
admin.site.register(TallesPersonalizados, list_display=('cuello', 'busto', 'con_rodilla', 'larg_talle', 'con_cintura', 'con_cadera', 'larg_manga', 'con_muneca', 'larg_pierna', 'altura_rodilla', 'dni'), list_filter=['cuello', 'busto', 'con_rodilla', 'larg_talle', 'con_cintura', 'con_cadera', 'larg_manga', 'con_muneca', 'larg_pierna', 'altura_rodilla', 'dni'], search_fields=['cuello', 'busto', 'con_rodilla', 'larg_talle', 'con_cintura', 'con_cadera', 'larg_manga', 'con_muneca', 'larg_pierna', 'altura_rodilla', 'dni'])
admin.site.register(ImagenesProducto, list_display=('img', 'id_prod'), list_filter=['img', 'id_prod'], search_fields=['img', 'id_prod'])
admin.site.register(TallaDelProducto, list_display=('id_prod', 'id_talle'), list_filter=['id_prod', 'id_talle'], search_fields=['id_prod', 'id_talle'])
admin.site.register(Talla, list_display=('inicial_talle', 'medida', 'm_h'), list_filter=['inicial_talle', 'medida', 'm_h'], search_fields=['inicial_talle', 'medida', 'm_h'])
admin.site.register(Envio, list_display=('nombre', 'desc'), list_filter=['nombre', 'desc'], search_fields=['nombre', 'desc'])
admin.site.register(Usuario, list_display=('dni', 'nombre', 'apellido', 'tel_cel', 'dir_calle', 'dir_numero', 'cp', 'ciudad', 'provincia', 'ph', 'id_lvl'), list_filter=['dni', 'nombre', 'apellido', 'tel_cel', 'dir_calle', 'dir_numero', 'cp', 'ciudad', 'provincia', 'ph', 'id_lvl'], search_fields=['dni', 'nombre', 'apellido', 'tel_cel', 'dir_calle', 'dir_numero', 'cp', 'ciudad', 'provincia', 'ph', 'id_lvl'])
admin.site.register(Niveluser, list_display=['nivel'], list_filter=['nivel'], search_fields=['nivel'])
admin.site.register(Favoritos, list_display=('id_prod', 'dni'), list_filter=['id_prod', 'dni'], search_fields=['id_prod', 'dni'])
admin.site.register(Login, list_display=('email', 'psw', 'dni'), list_filter=['email', 'psw', 'dni'], search_fields=['email', 'psw', 'dni'])
admin.site.register(Newsletter, list_display=['email'], list_filter=['email'], search_fields=['email'])
admin.site.register(ProductosEnCarrito, list_display=('id_prod', 'id_car', 'cantidad', 'talla', 'color', 'espersonalizado'), list_filter=['id_prod', 'id_car', 'cantidad', 'talla', 'color', 'espersonalizado'], search_fields=['id_prod', 'id_car', 'cantidad', 'talla', 'color', 'espersonalizado'])
admin.site.register(Colores, list_display=('nombre', 'exa'), list_filter=['nombre', 'exa'], search_fields=['nombre', 'exa'])