import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductDataService } from './product-data.service';
@Injectable({
  providedIn: 'root'
})
export class ProductCarritoService {

  constructor(private http: HttpClient, private productData: ProductDataService) { }
  

  agregarCarrito(){
    this.productData.productoCarrito().subscribe(Producto => {
      this.http.post("http://localhost:8000/api/producto-al-carrito/", Producto)
    } )
  }
}