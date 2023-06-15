import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-pantalla-del-carrito',
  templateUrl: './pantalla-del-carrito.component.html',
  styleUrls: ['./pantalla-del-carrito.component.css']
})
export class PantallaDelCarritoComponent {

  constructor(private navigation: NavigationService) {  }

  navigate() {
    this.navigation.navigateToPasarelaDePagos();
  }
}
