import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SistemasTallasComponent } from './sistemas-tallas/sistemas-tallas.component';
import { ImagenComponent } from './imagen/imagen.component';
import { PanelDeControlComponent } from './panel-de-control/panel-de-control.component';



@NgModule({
  declarations: [
    SistemasTallasComponent,
    ImagenComponent,
    PanelDeControlComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SistemaDeTallaModule { }
