import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginLogupComponent } from './login-logup/login-logup.component';
import { RegistroComponent } from './registro/registro.component';
import { EditarCuentaComponent } from './editar-cuenta/editar-cuenta.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginLogupComponent,
    RegistroComponent,
    EditarCuentaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CuentaModule { }
