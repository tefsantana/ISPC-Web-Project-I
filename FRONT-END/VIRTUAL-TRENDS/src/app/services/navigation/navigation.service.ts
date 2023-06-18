import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: "root"
})

export class NavigationService {
    [x: string]: any;
    constructor(private router: Router) {}

    /**
     * Navigates to 'Home' landing page
     */
    navigateToHome(): void {
        this.router.navigate(['/home']);
    }

    /**
     * Navigates to 'Sistema de talla' landing page
     */
    navigateToSistemaDeTalla(): void {
        this.router.navigate(['/sistema-de-talla']);
    }

    /**
     * Navigates to 'Talle Estandar' landing page.
     */

    navigateToTallaEstandar(): void {
        this.router.navigate(['/talla-estandar']);
    }

    /**
     * Navigates to 'Talle Personalizada' landing page.
     */

    navigateToTallaPersonalizada(): void {
        this.router.navigate(['/talla-personalizada']);
    }

    /**
     * Navigates to 'Product/:id' landing page for individual product.
     */
    navigateToProduct(id: string): void {
        this.router.navigate(['/product/' + id]);
    }

    /**
     * Navigates to 'Products' landing where it shows all the products.
     */
    navigateToProducts(): void {
        this.router.navigate(['/products']);
    }

    /**
     * Navigates to 'Carrito' landing page.
     */

    navigateToCarrito(): void {
        this.router.navigate(['/carrito']);
    }

    /**
     * Navigates to 'Nosotros' landing page.
     */

    navigateToNosotros(): void {
        this.router.navigate(['/nosotros']);
    }


    /**
     * Navigates to 'Contacto' landing page.
     */

    navigateToContacto(): void {
        this.router.navigate(['/contacto']);
    }

    navigateToUsuario(): void {
        this.router.navigate(['/ver-cuenta'])
    }

    navigateToCuenta(): void {
        this.router.navigate(['/cuenta']);
    }

    navigateToRegistro() {
        this.router.navigate(['/registro']);
    }

    navigateToErrorPage() {
        this.router.navigate(['/**']);
    }

    navigateToEditarCuenta() {
        this.router.navigate(['/editar-cuenta'])
    }

    navigateToFavoritos() {
        this.router.navigate(['/favoritos'])
    }

    navigateToPasarelaDePagos() {
        this.router.navigate(['/pago'])
    }

    navigateToTYP() {
        this.router.navigate(['/pago/final'])
    }

    navigateToAdmin() {
        this.router.navigate(['/admin'])
    }

    navigateToProductsAdmin() {
        this.router.navigate(['/admin/products'])
    }

    navigateToUsersAdmin() {
        this.router.navigate(['/admin/users'])
    }
}
