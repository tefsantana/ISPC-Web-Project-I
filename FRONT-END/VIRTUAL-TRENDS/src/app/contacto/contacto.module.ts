import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContactoComponent } from './dashboard-contacto/dashboard-contacto.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardContactoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class ContactoModule { }
