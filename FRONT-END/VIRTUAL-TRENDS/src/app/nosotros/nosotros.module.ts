import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosDashboardComponent } from './nosotros-dashboard/nosotros-dashboard.component';
import { CarrouselComponent } from './carrousel/carrousel.component';




@NgModule({
  declarations: [
    NosotrosDashboardComponent,
    CarrouselComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NosotrosDashboardComponent,
    CarrouselComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class NosotrosModule { }
