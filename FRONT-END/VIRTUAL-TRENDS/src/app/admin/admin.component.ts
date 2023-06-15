import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation/navigation.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private navigation: NavigationService) { }

  ngOnInit() {
  }

  navigateToProductsAdmin() {
    this.navigation.navigateToProductsAdmin();
  }

  navigateToUsersAdmin() {
    this.navigation.navigateToUsersAdmin();
  }

}
