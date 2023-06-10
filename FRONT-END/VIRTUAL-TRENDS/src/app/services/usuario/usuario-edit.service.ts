import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsarioEditService {

  private apiUrl = 'http://localhost:3000/editar-cuenta';
  constructor(public editService: UsarioEditService, private http:HttpClient){}
  public post(data: any) {
    return this.http.post(this.apiUrl, data);
  }
  //   dataUsuario() {
  //    return [{ name: 'jose', id: 33, telefono: 11111111, direccion:'moldes', altura:'2681' }];
  // }
   ngOnInit () {
    this.editService.post ({name:'jose', id: 33, telefono: 111111, direccion: 'moldes', altura: '2681'})

}}
