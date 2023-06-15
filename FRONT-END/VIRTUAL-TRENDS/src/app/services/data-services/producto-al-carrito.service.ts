import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DniDataService } from './dni-data.service';

@Injectable({
  providedIn: 'root'
})

export class ProductoAlCarritoService {

  constructor(private http:HttpClient, private dniData:DniDataService){}

  getCarrito(){

    

    this.dniData.recibirDNI().subscribe(dniRecibido => {

      return this.http.get('https://localhost:8000/api/consultar-carrito/?dni=${dniRecibido}');

    })
  }
}