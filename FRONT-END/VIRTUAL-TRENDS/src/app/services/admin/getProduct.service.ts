import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetProductService {
  private apiUrl = 'http://localhost:8000/api/products/';

  constructor(private http: HttpClient) {
    
  }

  public get(id_producto: string) {
    /** Método GET para obtener un producto específico a modificar.*/
    return this.http.get(this.apiUrl + id_producto);
  }
}
