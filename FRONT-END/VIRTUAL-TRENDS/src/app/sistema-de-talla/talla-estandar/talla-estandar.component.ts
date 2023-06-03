import { Component, OnInit, ɵcoerceToBoolean } from '@angular/core';
import { SwEstandarService } from 'src/app/services/sw-estandar.service';
import { RecibirTallasService } from 'src/app/services/tallas-services/recibir-tallas.service';
import { ProductDataService } from 'src/app/services/data-services/product-data.service';

@Component({
  selector: 'app-talla-estandar',
  templateUrl: './talla-estandar.component.html',
  styleUrls: ["./talla-estandar.component.css"]
})
export class TallaEstandarComponent implements OnInit{

  constructor (private estandarSS: SwEstandarService, private recibirTallas: RecibirTallasService, private productData: ProductDataService){

  }

  seleccionado: string=""
  activos: string[] = this.recibirTallas.enviarTallasDisponibles()
  product_ID: any
  colorSeleccionado: string = ''
  stock: number = 0

  ngOnInit() {
    this.productData.recibirDatos("id_producto").subscribe(dato => {
      this.product_ID = dato;
    });
    this.productData.recibirDatos("color").subscribe(dato => {
      this.colorSeleccionado = dato;
    });
    this.productData.recibirDatos("cantidad").subscribe(dato => {
      this.stock = dato;
    });
  }

  esActivo(talle: string){
    return this.activos.includes(talle)
  }

  toggleSeleccionado(talle: string){
    if(this.esActivo(talle)){
      this.seleccionado = talle
    }

  }

  cerrarEstandar(){

    this.estandarSS.$tallaEstandar.emit(false)

  }

  agregar_al_carrito(){
    console.log(this.product_ID)
    console.log(this.colorSeleccionado);
    console.log(this.stock);
  }
}

