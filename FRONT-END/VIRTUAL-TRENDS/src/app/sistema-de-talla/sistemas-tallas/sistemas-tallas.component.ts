import { Component, OnInit} from '@angular/core';
import { SwEstandarService } from 'src/app/services/sw-estandar.service';

@Component({
  selector: 'app-sistemas-tallas',
  templateUrl: './sistemas-tallas.component.html',
  styleUrls: ['./sistemas-tallas.component.css']
})
export class SistemasTallasComponent implements OnInit {

  ngOnInit(): void {

    this.estandarSS.$tallaEstandar.subscribe(()=>(this.tofEstandar = true))

  }
  

  tofEstandar:boolean = false;

  abrirEstandar(){
    this.tofEstandar = true;

  }
 
  constructor(public estandarSS: SwEstandarService){



  }

}
