import { Component, Input } from '@angular/core';
import { NavigationService } from '../../../services/navigation/navigation.service';
import { Products } from '../../../utils/products';
import { ProductDataService } from 'src/app/services/data-services/product-data.service';
@Component({
  selector: 'app-cards-products',
  templateUrl: './cards-products.component.html',
  styleUrls: ['./cards-products.component.css']
})

export class CardsProductsComponent {
  selectedColor: string = '';
  isDisabled: boolean = true;
  @Input() colors: Products.Colors[] = [];

  constructor(private navigationService: NavigationService, private productData: ProductDataService) {
  }

  selectColor(event: any) {
    this.isDisabled = false;
    Array.from(document.getElementsByClassName('color-box')).forEach(element => {
      if (element.id === event.target.id) {
        this.selectedColor = element.id;
        document.getElementById(element.id)?.classList.add('box-shadow');
        this.productData.enviarDatos("color", this.selectedColor);
      }
      else {
        document.getElementById(element.id)?.classList.remove('box-shadow');
      }
    });
  }

  navigate() {
    this.navigationService.navigateToSistemaDeTalla();
  }
}
