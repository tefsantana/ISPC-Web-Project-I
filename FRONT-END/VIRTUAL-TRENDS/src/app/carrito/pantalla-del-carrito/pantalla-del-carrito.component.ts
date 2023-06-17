import { Component, OnInit } from '@angular/core';
import { ProductoAlCarritoService } from '../../services/data-services/producto-al-carrito.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { PicturesComponent } from 'src/app/products/dashboard-individual-product/pictures/pictures.component';
type productosCarrito={ 
  id_prod: number,
  id_car: number,
  cantidad:number,
  talla: number,
  color: string,
  espersonalizado: boolean
}

@Component({
  selector: 'app-pantalla-del-carrito',
  templateUrl: './pantalla-del-carrito.component.html',
  styleUrls: ['./pantalla-del-carrito.component.css']
})
export class PantallaDelCarritoComponent implements OnInit {
  productos: productosCarrito[]=[];

  constructor(public productosCarrito: ProductoAlCarritoService, private navigation: NavigationService) { }



  ngOnInit(): void {



  }



  


  navigate() {
    this.navigation.navigateToPasarelaDePagos();
  }
}
