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

  contenidoCarrito=[
    {
      Nombre: "SUMMERTOP", 
      Talle: "S",
      Color: "AZUL",
      Precio: 420,
      url: "../../../assets/products/01_ASSYMETRICTEE/01_ASSYMETRICTEE_Custom_View_2.webp",
    },{
      Nombre: "VESTIDO", 
      Talle: "XS",
      Color: "ROJO",
      Precio: 230,
      url: "../../../assets/products/01_ASSYMETRICTEE/01_ASSYMETRICTEE_Custom_View_2.webp",
    },{
      Nombre: "SHORTS", 
      Talle: "M",
      Color: "VERDE",
      Precio: 75,
      url: "../../../assets/products/01_ASSYMETRICTEE/01_ASSYMETRICTEE_Custom_View_2.webp",
    },{
      Nombre: "MEDIAS", 
      Talle: "L",
      Color: "ROJO",
      Precio: 50,
      url: "../../../assets/products/01_ASSYMETRICTEE/01_ASSYMETRICTEE_Custom_View_2.webp",
    },{
      Nombre: "SACO", 
      Talle: "S",
      Color: "AZUL",
      Precio: 500,
      url: "../../../assets/products/01_ASSYMETRICTEE/01_ASSYMETRICTEE_Custom_View_2.webp",
    },{
      Nombre: "CAMPERA", 
      Talle: "XL",
      Color: "ROJO",
      Precio: 750,
      url: "../../../assets/products/01_ASSYMETRICTEE/01_ASSYMETRICTEE_Custom_View_2.webp",
    },
  ]


  precioSubtotal: number=0;
  

  constructor(private http:HttpClient, private dniData:DniDataService){

    this.contenidoCarrito.forEach(Precio => {
      this.precioSubtotal += Precio.Precio;
    });

  }

  getCarrito(){

    

    //this.dniData.recibirDNI().subscribe(dniRecibido => {

      //this.http.get<productosCarrito[]>('https://localhost:8000/api/consultar-carrito/?dni=${dniRecibido}').subscribe(carrito=>{
       // this.contenidoCarrito=carrito
    //  })
    //})

    return this.contenidoCarrito

  }
}