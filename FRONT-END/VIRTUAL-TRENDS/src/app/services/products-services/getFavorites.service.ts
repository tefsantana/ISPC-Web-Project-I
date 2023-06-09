import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetFavoritesService {
  private apiUrl = 'http://localhost:8000/api/favorites/' + '11111111/';

  constructor(private http: HttpClient) {
    
  }

  public get(dni: any) {
    /** Método GET para obtener todos los productos.*/
    return this.http.get(this.apiUrl, dni);
  }
}
