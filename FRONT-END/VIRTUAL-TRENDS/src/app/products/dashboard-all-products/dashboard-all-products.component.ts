import { Component } from '@angular/core';
import { GetProductsService } from '../../services/products-services/getProducts.service';
import { Products } from '../../utils/products';
import { ProductDataService } from 'src/app/services/data-services/product-data.service';
import { ProductsFactoryService } from 'src/app/services/products-services/productsFactory.service';

@Component({
  selector: 'app-dashboard-all-products',
  templateUrl: './dashboard-all-products.component.html',
  styleUrls: ['./dashboard-all-products.component.css']
})
export class DashboardAllProductsComponent {
  products: Products.Product[] = [];
  hasFavorite: boolean = false;
  hasAmount: boolean = false;
  isLoading: boolean = false;
  constructor(private GetProductsService: GetProductsService, private ProductsFactoryService: ProductsFactoryService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.loadProducts();
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  public loadProducts() {
    this.GetProductsService.get().subscribe((data: any) => {
      this.products = data.products;
      this.ProductsFactoryService.saveProductsList(this.products);
    });
  }
}
