import { Component, OnInit, ɵcoerceToBoolean } from '@angular/core';
import { SwPersonalizadoService } from 'src/app/services/sw-personalizado.service';
import { ProductDataService } from 'src/app/services/data-services/product-data.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { FormControl, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-talla-personalizada',
  templateUrl: './talla-personalizada.component.html',
  styleUrls: ['./talla-personalizada.component.css']

})
export class TallaPersonalizadaComponent implements OnInit{

  form: any

  ngOnInit(): void {
    
  }
  constructor(private personalizadoSS: SwPersonalizadoService,
              private productData: ProductDataService,
              private navigation: NavigationService,
              private formBuilder: FormBuilder)
              {

                this.form = this.formBuilder.group({
                  cuello:[0,[Validators.required, Validators.maxLength(3)]],
                  busto:[0,[Validators.required, Validators.maxLength(3)]],
                  conRodilla:[0,[Validators.required, Validators.maxLength(3)]],
                  largTalle:[0,[Validators.required, Validators.maxLength(3)]],
                  conCintura:[0,[Validators.required, Validators.maxLength(3)]],
                  conCadera:[0,[Validators.required, Validators.maxLength(3)]],
                  largManga:[0,[Validators.required, Validators.maxLength(3)]],
                  conMuneca:[0,[Validators.required, Validators.maxLength(3)]],
                  largPierna:[0,[Validators.required, Validators.maxLength(3)]],
                  alturaRodilla:[0,[Validators.required, Validators.maxLength(3)]],
                })

  }

  get tallaPersonalizada(): any {
    return this.form.value;
  }
  
  cerrarPersonalizado(){

    this.personalizadoSS.$tallePersonalizado.emit(false)

  }

  agregar_al_carrito(){
    this.productData.enviarDatos('personalizado', true)
    this.navigation.navigateToCarrito()
  }

}
