import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { UsuarioVerService } from 'src/app/services/usuario/usuario-ver.service';

@Component({
  selector: 'app-ver-cuenta',
  templateUrl: './ver-cuenta.component.html',
  styleUrls: ['./ver-cuenta.component.css']
})
export class VerCuentaComponent {
  public showEditarCuenta: boolean = false;
  public cuentaData: any

  /*
  public cuentaData: any = {

    dni: 50000,
    nombre: 'Rosalia',
    apellido: 'De las Montañas',
    tel_cel: 11111111,
    dir_calle: 'Calle falsa',
    dir_numero: 123,
    cp: 1111,
    ciudad: 'Ciudad falsa',
    provincia: 'Provincia falsa',
    ph: '-',
    id_lvl: 0

  }
  */

  constructor(
    private navigationService: NavigationService,
    private cuentaTemp: UsuarioVerService) {}

  ngOnInit() {

    this.cuentaData = this.cuentaTemp.recibirDatosDeUsuario()

  }

  closePopUp() {
    this.navigationService.navigateToHome();
  }

  showEditarCuentaForm() {
    this.showEditarCuenta = !this.showEditarCuenta;
  }

  navigateToAdmin(){
    this.navigationService.navigateToAdmin();
  }


}
