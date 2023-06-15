import { Component } from '@angular/core';

@Component({
  selector: 'app-ver-cuenta',
  templateUrl: './ver-cuenta.component.html',
  styleUrls: ['./ver-cuenta.component.css']
})
export class VerCuentaComponent {


  tofEditarCuenta:boolean = false;
  abrirEditarCuenta(){
    this.tofEditarCuenta = true;

  }

}
