import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private apiUrlGet = 'http://localhost:8000/api/favorites/';
  private apiUrlPost = 'http://localhost:8000/api/favorites/change/';

  constructor(private http: HttpClient) {
    
  }

  public get(dni: any) {
    /** Método GET para obtener todos los productos.*/
    return this.http.get(this.apiUrlGet + String(dni) + "/", dni);
  }

  public post(datos: any) {
    /** Método POST para agregar un producto a favoritos o para eliminarlo.*/
    return this.http.post(this.apiUrlPost, datos);
  }
}
