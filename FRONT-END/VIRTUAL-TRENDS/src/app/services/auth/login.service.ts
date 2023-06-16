import { Injectable } from '@angular/core';
import { LoginRequest } from './loginrequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError, BehaviorSubject, tap } from 'rxjs';
import { UserData } from './userdata';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<UserData> = new BehaviorSubject<UserData>({dni:0});
  constructor(private http: HttpClient) {

  }

  login(credentials:LoginRequest): Observable<UserData>{
    return  this.http.get<UserData>('././assets/data.json').pipe(
      tap((userData: UserData)  => {
        this.currentUserData.next(userData);
        this.currentUserLoginOn.next(true);
      }),
      catchError(this.handleError)
    )
  }

  private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.error("Se a producido un error" + error.error);
    }
    else{
      console.error("Error en backend: "+ error.status + error.error);
    }
    return throwError(()=> new Error("Algo falló. Por favor intente nuevamente"))
  }

  get userData(): Observable<UserData>{
    return this.currentUserData.asObservable();
  }

  get userLoginOn(): Observable<boolean>{
    return this.currentUserLoginOn.asObservable();
  }
}
