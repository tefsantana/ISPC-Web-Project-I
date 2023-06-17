import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { LoginService } from '../auth/login.service';

@Injectable({
  providedIn: 'root'
})
export class DniDataService {

  private dni: BehaviorSubject<number> = new BehaviorSubject<number>(0);


  constructor(private loginData: LoginService) { }


  recibirDNI(){
    this.loginData.userData.subscribe(currentUser => {
      this.dni.next(currentUser.dni)
    })
    return this.dni.asObservable()
  }

}