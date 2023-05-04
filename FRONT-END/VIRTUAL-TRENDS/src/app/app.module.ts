import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
/*import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';*/
import { ProductsModule } from './products/products.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [		
    AppComponent,
      HomeComponent,
      /*HeaderComponent,
      FooterComponent */
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
