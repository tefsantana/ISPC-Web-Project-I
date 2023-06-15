import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/utils/products';

interface Product {
  nombre: string;
  descripcion: string;
  precio: number;
  colores: Products.Colors[];
  tallas: Products.Sizes[];
  talle_personalizado: boolean;
  imagenes: Products.Pictures[];
  categoria: number;
}

@Component({
  selector: 'app-admin-products-form',
  templateUrl: './admin-products-form.component.html',
  styleUrls: ['./admin-products-form.component.css']
})
export class AdminProductsFormComponent implements OnInit {

  @Input() type: string = '';
  colorsList: Products.Colors[] = ["dark-red", "dark-green", "purple-grey", "orange", "coral", "cyan"];
  sizesList: Products.Sizes[] = ["XS", "S", "M", "L", "XL"];
  newProduct: Product = {
    nombre: "",
    descripcion: "",
    precio: 0,
    colores: [],
    tallas: [],
    talle_personalizado: false,
    imagenes: [],
    categoria: 0
  };

  constructor() { }

  ngOnInit() {
  }

  addProduct() {
    console.log("Agregando producto");
    Array.from(document.getElementsByClassName("color-checkbox")).forEach(color => {
      console.log(color);
    });
  }

}
