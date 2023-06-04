import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Products } from 'src/app/utils/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsFactoryService {
  private productsList = new BehaviorSubject<Products.Product[]>([]);

  constructor() { }

  saveProductsList(products: Products.Product[]) {
    this.productsList.next(products);
  }

  getProducts() {
    return this.productsList;
  }
}
