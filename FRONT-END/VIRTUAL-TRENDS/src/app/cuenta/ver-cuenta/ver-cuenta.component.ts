import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-ver-cuenta',
  templateUrl: './ver-cuenta.component.html',
  styleUrls: ['./ver-cuenta.component.css']
})
export class VerCuentaComponent {
  public showEditarCuenta: boolean = false;
  constructor(private navigationService: NavigationService) {}

  // tofEditarCuenta:boolean = false;
  // abrirEditarCuenta(){
  //   this.tofEditarCuenta = true;
  // }

  closePopUp() {
    this.navigationService.navigateToHome();
  }
  showEditarCuentaForm() {
    this.showEditarCuenta = !this.showEditarCuenta;
  }


}
