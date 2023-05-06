import { Component, OnInit } from '@angular/core';
import { SwPersonalizadoService } from 'src/app/services/sw-personalizado.service';

@Component({
  selector: 'app-sistemas-tallas',
  templateUrl: './sistemas-tallas.component.html',
  styleUrls: ['./sistemas-tallas.component.css']
})
export class SistemasTallasComponent implements OnInit{

  tofPersonalizado:boolean = false;

  constructor(private personalizadoSS: SwPersonalizadoService){

  }

  ngOnInit(){
    
    this.personalizadoSS.$tallePersonalizado.subscribe((valor)=> {this.tofPersonalizado = valor})

  }

  abrirPersonalizado(){

    this.tofPersonalizado = true;

  }

}
