import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductDataService } from './product-data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductCarritoService {

  constructor(private http: HttpClient, private productData: ProductDataService) { }
  producto: any[];

  agregarCarrito(){
    this.productData.productoCarrito().subscribe(Producto => {
      this.producto=Producto;
    } )
    this.http.post("http://localhost:8000/")
  }
}
