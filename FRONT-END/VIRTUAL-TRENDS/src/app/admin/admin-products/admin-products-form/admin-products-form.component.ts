import { Component, Input, OnInit } from '@angular/core';
import { GetCategoriesService } from 'src/app/services/admin/getCategories.service';
import { GetProductService } from 'src/app/services/admin/getProduct.service';
import { Products } from 'src/app/utils/products';
import { AdminProductsComponent } from '../admin-products.component';

@Component({
  selector: 'app-admin-products-form',
  templateUrl: './admin-products-form.component.html',
  styleUrls: ['./admin-products-form.component.css']
})
export class AdminProductsFormComponent implements OnInit {

  @Input() type: string = '';
  @Input() showModifyForm: boolean = false;
  colorsList: Products.Colors[] = ["dark-red", "dark-green", "purple-grey", "orange", "coral", "cyan"];
  sizesList: Products.Sizes[] = ["XS", "S", "M", "L", "XL"];
  id_prod: string = '';
  newProduct: Products.AdminProduct = {
    nombre: "",
    descripcion: "",
    precio: 0,
    colores: [],
    tallas: [],
    imagenes: [],
    categoria: ""
  };
  modifiedProduct: Products.AdminProduct = {
    nombre: "",
    descripcion: "",
    precio: 0,
    colores: [],
    tallas: [],
    imagenes: [],
    categoria: ""
  };
  categorias: string[] = [];

  constructor(private AdminProduct: GetProductService, private AdminCategories: GetCategoriesService, private AdminParentComponent: AdminProductsComponent) { }

  ngOnInit() {
    this.AdminCategories.get().subscribe((data: any) => {
      this.categorias = data;
    });
  }

  validations() {

  }

  resetState() {
    // Esta función es para resetear el estado inicial de los inputs para no enviar datos erróneos ya que los datos que se reciben del servicio son solo para mostrar.
    this.modifiedProduct = {
      nombre: "",
      descripcion: "",
      precio: 0,
      colores: [],
      tallas: [],
      imagenes: [],
      categoria: ""
    };
  }

  modifyProduct() {
    this.id_prod = (document.getElementById('id-producto') as HTMLInputElement).value;
    this.AdminProduct.get(this.id_prod).subscribe((data: any) => {
      this.modifiedProduct = data;
      Array.from(this.categorias).forEach((categoria) => {
        if (categoria === this.modifiedProduct.categoria) {
          (document.getElementById('categories-select') as HTMLSelectElement).value = categoria;
        }
      });
    });
    this.showModifyForm = !this.showModifyForm;
  }

  addProduct(e: any) {
    e.preventDefault();

    if (this.type === 'add') {
      // Colors
      Array.from(this.colorsList).forEach(color => {
        Array.from(document.getElementsByClassName('color-checkbox')).forEach(element => {
          if (element.id === color && (element as HTMLInputElement).checked) {
            this.newProduct.colores.push(color);
          }
        });
      });

      // Sizes
      Array.from(this.sizesList).forEach(size => {
        Array.from(document.getElementsByClassName('talle-checkbox')).forEach(element => {
          if (element.id === size && (element as HTMLInputElement).checked) {
            this.newProduct.tallas.push(size);
          }
        });
      });

      this.newProduct.nombre = (document.getElementById('name-input') as HTMLInputElement).value;
      this.newProduct.descripcion = (document.getElementById('description-input') as HTMLInputElement).value;
      this.newProduct.precio = Number((document.getElementById('price-input') as HTMLInputElement).value);
      this.newProduct.categoria = (document.getElementById('categories-select') as HTMLSelectElement).value;
      this.newProduct.imagenes.push((document.getElementById('first-image-input') as HTMLInputElement).value);
      this.newProduct.imagenes.push((document.getElementById('second-image-input') as HTMLInputElement).value);
      this.newProduct.imagenes.push((document.getElementById('third-image-input') as HTMLInputElement).value);
    }
    else if (this.type === 'modify') {
      this.resetState();

      // Colors
      Array.from(this.colorsList).forEach(color => {
        Array.from(document.getElementsByClassName('color-checkbox')).forEach(element => {
          if (element.id === color && (element as HTMLInputElement).checked) {
            if (!this.modifiedProduct.colores.includes(color)) {
              this.modifiedProduct.colores.push(color);
            }
          }
        });
      });

      // Sizes
      Array.from(this.sizesList).forEach(size => {
        Array.from(document.getElementsByClassName('talle-checkbox')).forEach(element => {
          if (element.id === size && (element as HTMLInputElement).checked) {
            if (!this.modifiedProduct.tallas.includes(size)) {
              this.modifiedProduct.tallas.push(size);
            }
          }
        });
      });

      this.modifiedProduct.nombre = (document.getElementById('name-input') as HTMLInputElement).value;
      this.modifiedProduct.descripcion = (document.getElementById('description-input') as HTMLInputElement).value;
      this.modifiedProduct.precio = Number((document.getElementById('price-input') as HTMLInputElement).value);
      this.modifiedProduct.categoria = (document.getElementById('categories-select') as HTMLSelectElement).value;
      if (!this.modifiedProduct.imagenes.includes((document.getElementById('first-image-input') as HTMLInputElement).value)) {
        this.modifiedProduct.imagenes.push((document.getElementById('first-image-input') as HTMLInputElement).value);
      }
      if (!this.modifiedProduct.imagenes.includes((document.getElementById('second-image-input') as HTMLInputElement).value)) {
        this.modifiedProduct.imagenes.push((document.getElementById('second-image-input') as HTMLInputElement).value);
      }
      if (!this.modifiedProduct.imagenes.includes((document.getElementById('third-image-input') as HTMLInputElement).value)) {
        this.modifiedProduct.imagenes.push((document.getElementById('third-image-input') as HTMLInputElement).value);
      }
    }
    console.log(this.modifiedProduct)
  }

}
