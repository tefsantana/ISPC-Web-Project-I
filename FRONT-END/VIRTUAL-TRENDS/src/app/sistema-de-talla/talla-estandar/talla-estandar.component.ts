import { Component, OnInit, ɵcoerceToBoolean } from '@angular/core';
import { SwEstandarService } from 'src/app/services/sw-estandar.service';
import { RecibirTallasService } from 'src/app/services/tallas-services/recibir-tallas.service';

@Component({
  selector: 'app-talla-estandar',
  templateUrl: './talla-estandar.component.html',
  styleUrls: ["./talla-estandar.component.css"]
})
export class TallaEstandarComponent implements OnInit{

  constructor (private estandarSS: SwEstandarService, private recibirTallas: RecibirTallasService){

  }
  
  seleccionado: string=""
  activos: string[] = this.recibirTallas.enviarTallasDisponibles()
  
  ngOnInit(): void {
    
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
}

