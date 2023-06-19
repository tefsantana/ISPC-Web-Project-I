import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
/*import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';*/
import { HomeModule } from './home/home.module';
import { ProductsModule } from './products/products.module';
import { SistemaDeTallaModule } from './sistema-de-talla/sistema-de-talla.module';
import { HttpClientModule } from '@angular/common/http';
import { CarritoModule } from './carrito/carrito.module';
import { FormsModule } from '@angular/forms';
import { FavoritesModule } from './favorites/favorites.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import { CuentaModule } from './cuenta/cuenta.module';
import { UserCardModule } from './cuenta/user-card/user-card.module';
import { NosotrosModule } from './nosotros/nosotros.module';
import { PasarelaPagosModule } from './pasarela-pagos/pasarela-pagos.module';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { ContactoModule } from './contacto/contacto.module';

@NgModule({
  declarations: [
    AppComponent,
      /*HeaderComponent,
      FooterComponent*/
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    SistemaDeTallaModule,
    SharedModule,
    HttpClientModule,
    CarritoModule,
    FormsModule,
    FavoritesModule,
    ReactiveFormsModule,
    AdminModule,
    CuentaModule,
    UserCardModule,
    NosotrosModule,
    PasarelaPagosModule,
    ContactoModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
