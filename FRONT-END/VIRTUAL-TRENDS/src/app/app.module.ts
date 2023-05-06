import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductsModule } from './products/products.module';
import { SistemaDeTallaModule } from './sistema-de-talla/sistema-de-talla.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    SistemaDeTallaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
