import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductDataService } from './product-data.service';
import { Observable } from 'rxjs'; 
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductCarritoService {

  constructor(private http: HttpClient, private productData: ProductDataService) { }
  

  agregarCarrito(): Observable<any>{
    this.productData.productoCarrito().subscribe(Producto => {
      let producto=Producto;
      return this.http.post("http://localhost:8000/api/producto-al-carrito/", producto).pipe(
        map(response => response.id_car)
      )
    } )
  }
}
