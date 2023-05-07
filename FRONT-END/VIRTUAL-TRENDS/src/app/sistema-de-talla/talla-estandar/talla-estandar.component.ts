import { Component, OnInit, ɵcoerceToBoolean } from '@angular/core';
import { SwEstandarService } from 'src/app/services/sw-estandar.service';

@Component({
  selector: 'app-talla-estandar',
  templateUrl: './talla-estandar.component.html',
  styleUrls: ["./talla-estandar.component.css"]
})
export class TallaEstandarComponent implements OnInit{
  ngOnInit(): void {
    
  }
  constructor (public estandarSS: SwEstandarService){

  }

  cerrarEstandar(){

    this.estandarSS.$tallaEstandar.emit(false);

  }
}

