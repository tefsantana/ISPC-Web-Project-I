import { Component, OnInit, ɵcoerceToBoolean } from '@angular/core';
import { SwPersonalizadoService } from 'src/app/services/sw-personalizado.service';
import { ProductDataService } from 'src/app/services/data-services/product-data.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-talla-personalizada',
  templateUrl: './talla-personalizada.component.html',
  styleUrls: ['./talla-personalizada.component.css']

})
export class TallaPersonalizadaComponent implements OnInit{
  ngOnInit(): void {
    
  }
  constructor(private personalizadoSS: SwPersonalizadoService,
              private productData: ProductDataService,
              private navigation: NavigationService){

  }
  
  cerrarPersonalizado(){

    this.personalizadoSS.$tallePersonalizado.emit(false)

  }

  agregar_al_carrito(){
    this.productData.enviarDatos('personalizado', true)
    this.navigation.navigateToCarrito()
  }

}
