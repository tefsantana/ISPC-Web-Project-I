import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor() {

   }

   private product_ID: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  enviarDatos(dato: any){

    this.product_ID.next(dato)
  }


  recibirDatos(){
    return this.product_ID.asObservable()

  }


}
