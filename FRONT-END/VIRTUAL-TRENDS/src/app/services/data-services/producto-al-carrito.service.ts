import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DniDataService } from './dni-data.service';
type productosCarrito = {
  id_prod: number,
  id_car: number,
  cantidad: number,
  talla: number,
  color: string,
  espersonalizado: boolean
}

@Injectable({
  providedIn: 'root'
})

export class ProductoAlCarritoService {

  dniRecibido: number=0;


  contenidoCarrito: any[] = [];


  precioSubtotal: number = 0;


  constructor(private http: HttpClient, private dniData: DniDataService) {

    

  }

  pedirDNI(){

    this.dniData.recibirDNI().subscribe(dniTemp => { 

      this.dniRecibido=dniTemp

     })

  }

  getCarrito() {

    this.pedirDNI();

    this.http.get<productosCarrito[]>('https://localhost:8000/api/consultar-carrito/?dni=${this.dniRecibido}').subscribe(carrito => {
      this.contenidoCarrito = carrito
    })

    this.contenidoCarrito.forEach(Precio => {
      this.precioSubtotal += Precio.Precio;
    });


    return this.contenidoCarrito

  }
}