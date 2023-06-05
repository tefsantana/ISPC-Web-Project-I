import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TallaEstandarComponent } from './talla-estandar/talla-estandar.component';

import { SistemasTallasComponent } from './sistemas-tallas/sistemas-tallas.component';
import { ImagenComponent } from './imagen/imagen.component';
import { PanelDeControlComponent } from './panel-de-control/panel-de-control.component';
import { TallaPersonalizadaComponent } from './talla-personalizada/talla-personalizada.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SistemasTallasComponent,
    ImagenComponent,
    PanelDeControlComponent,
    TallaPersonalizadaComponent,
    TallaEstandarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class SistemaDeTallaModule { }
