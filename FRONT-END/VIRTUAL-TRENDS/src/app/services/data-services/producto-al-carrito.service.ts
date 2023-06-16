import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DniDataService } from './dni-data.service';
type productosCarrito={ 
  id_prod: number,
  id_car: number,
  cantidad:number,
  talla: number,
  color: string,
  espersonalizado: boolean
}

@Injectable({
  providedIn: 'root'
})

export class ProductoAlCarritoService {

  contenidoCarrito: productosCarrito []=[];

  constructor(private http:HttpClient, private dniData:DniDataService){}

  getCarrito(){

    

    this.dniData.recibirDNI().subscribe(dniRecibido => {

      this.http.get<productosCarrito[]>('https://localhost:8000/api/consultar-carrito/?dni=${dniRecibido}').subscribe(carrito=>{
        this.contenidoCarrito=carrito
      })
    })

    return this.contenidoCarrito

  }
}