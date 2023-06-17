import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PantallaDelCarritoComponent } from './pantalla-del-carrito/pantalla-del-carrito.component';
import { ProductsModule } from '../products/products.module';



@NgModule({
  declarations: [
    PantallaDelCarritoComponent
  ],
  imports: [
    CommonModule, ProductsModule
  ], 
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class CarritoModule { }
