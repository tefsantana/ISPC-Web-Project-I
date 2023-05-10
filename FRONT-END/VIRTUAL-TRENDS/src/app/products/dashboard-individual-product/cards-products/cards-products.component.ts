import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../../services/navigation/navigation.service';

type Color = null | 'dark-red' | 'dark-green' | 'dark-blue' | 'purple-grey' | 'orange' | 'salmon' | 'cyan';

@Component({
  selector: 'app-cards-products',
  templateUrl: './cards-products.component.html',
  styleUrls: ['./cards-products.component.css']
})

export class CardsProductsComponent {
  selectedColor: Color = null;
  constructor(private router: Router, private navigationService: NavigationService) { }

  selectColor(color: Color) {
    this.selectedColor = color;
  }

  navigate() {
    this.navigationService.navigate('sistema-de-talla');
  }
}
