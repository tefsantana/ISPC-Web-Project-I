import { Component } from '@angular/core';
import { NavigationService } from '../../../services/navigation/navigation.service';
import { Products } from '../../../utils/products';
@Component({
  selector: 'app-cards-products',
  templateUrl: './cards-products.component.html',
  styleUrls: ['./cards-products.component.css']
})

export class CardsProductsComponent {
  selectedColor: Products.Colors = null;
  constructor(private navigationService: NavigationService) { }

  selectColor(color: Products.Colors) {
    this.selectedColor = color;
  }

  navigate() {
    this.navigationService.navigateToSistemaDeTalla();
  }
}
