import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginLogupComponent } from './login-logup/login-logup.component';
import { RegistroComponent } from './registro/registro.component';
import { EditarCuentaComponent } from './editar-cuenta/editar-cuenta.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VerCuentaComponent } from './ver-cuenta/ver-cuenta.component';



@NgModule({
  declarations: [
    LoginLogupComponent,
    RegistroComponent,
    EditarCuentaComponent,
    VerCuentaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class CuentaModule { }
