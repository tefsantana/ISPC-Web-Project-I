import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DniDataService {

  private dni: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  enviarDNI(numero: number){
    this.dni.next(numero)
  }

  recibirDNI(){
    return this.dni
  }

}