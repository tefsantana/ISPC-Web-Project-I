import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetCategoriesService {
  private apiUrl = 'http://localhost:8000/api/product/categorias';

  constructor(private http: HttpClient) {
    
  }

  public get() {
    /** Método GET para obtener un producto específico a modificar.*/
    return this.http.get(this.apiUrl);
  }
}
