import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardProductsComponent } from './products/dashboard-products/dashboard-products.component';
import { TallaPersonalizadaComponent } from './sistema-de-talla/talla-personalizada/talla-personalizada.component';

const routes: Routes = [
  // Redirección por defecto a Home
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // Ruta para la página 404 cuando no encuentre la URL
  //{ path: '**', component: Pagina404Component },

  // Rutas de los componentes
  // { path: 'home', component: HomeComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'product/:id', component: DashboardProductsComponent },
  { path: 'product', component: DashboardProductsComponent },
  { path: 'talla-personalizada', component: TallaPersonalizadaComponent },
  // { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
