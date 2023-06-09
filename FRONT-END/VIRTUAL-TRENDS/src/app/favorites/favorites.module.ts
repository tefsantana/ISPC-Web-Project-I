import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites-page/favorites.component';
import { RouterLink, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { ProductsModule } from '../products/products.module';

@NgModule({
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
    AppRoutingModule,
    ProductsModule
  ],
  declarations: [FavoritesComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class FavoritesModule { }
export { FavoritesComponent };

