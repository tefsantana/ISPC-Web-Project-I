import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductDataService } from '../data-services/product-data.service';

@Injectable({
  providedIn: 'root'
})
export class RecibirTallasService {

  constructor(private http:HttpClient, private ProductData: ProductDataService) { 

  }
  
  tallasDisponibles: string[] = [
    "XS",
    "M",
    "XL"
  ]

  enviarTallasDisponibles(){
    return this.tallasDisponibles
  }
}
