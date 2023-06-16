import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CuentaModule } from 'src/app/cuenta/cuenta.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CuentaModule,
    CommonModule,
  ]
})
export class SharedModule { }