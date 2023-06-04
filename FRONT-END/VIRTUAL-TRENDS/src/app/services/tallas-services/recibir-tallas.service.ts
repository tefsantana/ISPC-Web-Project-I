import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductDataService } from '../data-services/product-data.service';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecibirTallasService {

  constructor(private http:HttpClient, private productData: ProductDataService) { 

  }

  enviarTallasDisponibles() {
    return this.productData.recibirDatos("id_producto").pipe(
      switchMap(id_Producto => {
        return this.http.get<string[]>(`http://localhost:8000/api/talla-de-producto/?id_producto=${id_Producto}`);
      })
    );
  }
  
}
