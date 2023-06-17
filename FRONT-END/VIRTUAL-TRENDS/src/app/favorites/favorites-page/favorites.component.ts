import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/products-services/favorites.service';
import { Products } from 'src/app/utils/products';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  products: Products.Product[] = [];
  hasFavorite: boolean = false;
  hasAmount: boolean = false;
  isLoading: boolean = false;
  constructor(private FavoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.loadProducts();
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  public loadProducts() {
    this.FavoritesService.get(11111111).subscribe((data: any) => {
      this.products = data;
    });
  }
}
