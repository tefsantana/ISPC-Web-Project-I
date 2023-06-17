import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { LoginService } from '../auth/login.service';

@Injectable({
  providedIn: 'root'
})
export class DniDataService {

  private dni: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  test: number = 44272508


  constructor(private loginData: LoginService) { }


  recibirDNI(){
<<<<<<< HEAD
    //this.loginData.userData.subscribe(currentUser => { 
      //this.dni.next(currentUser.dni)
    //})
    this.dni.next(12345678)
=======
    this.loginData.userData.subscribe(currentUser => {
      this.dni.next(currentUser.dni)
      //this.dni.next(this.test)
    })
>>>>>>> RochettiUriel-sp4
    return this.dni.asObservable()
  }

}