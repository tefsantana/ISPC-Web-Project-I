import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DniDataService {

  private dni: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  test: number = 8


  constructor() { }

  enviarDNI(){
    let numero = this.test
    this.dni.next(numero)
  }

  recibirDNI(){
    return this.dni.asObservable()
  }

}