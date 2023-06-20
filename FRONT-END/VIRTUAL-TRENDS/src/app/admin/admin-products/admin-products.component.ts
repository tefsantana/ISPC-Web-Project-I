import { Component, OnInit } from '@angular/core';
import { GetProductsService } from 'src/app/services/products-services/getProducts.service';
import { Products } from 'src/app/utils/products';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products: Products.Product[] = [];
  isLoading: boolean = false;
  public formType: string = '';
  constructor(private GetProductsService: GetProductsService) {}

  ngOnInit() {
    this.isLoading = true;
    this.loadProducts();
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  public loadProducts() {
    this.GetProductsService.get().subscribe((data: any) => {
      this.products = data.products;
    });
  }

  showForm(id: string) {
    switch (id) {
      case 'delete':
        this.formType = 'delete';
        break;
      case 'add':
        this.formType = 'add';
        break;
      case 'modify':
        this.formType = 'modify';
        break;
    }
  }
}
