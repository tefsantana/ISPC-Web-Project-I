import { Component, OnInit } from '@angular/core';
import { ProductoAlCarritoService } from '../../services/data-services/producto-al-carrito.service';

@Component({
  selector: 'app-pantalla-del-carrito',
  templateUrl: './pantalla-del-carrito.component.html',
  styleUrls: ['./pantalla-del-carrito.component.css']
})
export class PantallaDelCarritoComponent implements OnInit {
  productos: any[] = [];

  constructor(private carritoService: ProductoAlCarritoService) { }

  ngOnInit(): void {

}
}