import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DniDataService } from '../data-services/dni-data.service';
type UsuarioData = {

  dni: number,
  nombre: string,
  apellido: string,
  tel_cel: number,
  dir_calle: string,
  dir_numero: number,
  cp: number,
  ciudad: string,
  provincia: string,
  ph: string,
  id_lvl:number
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioVerService {

  constructor(
    private http: HttpClient, 
    private dniData: DniDataService
    ) { }
  
  dniRecibido: number = 0
  datosUsuario: any

    recibirDNI(){
      this.dniData.recibirDNI().subscribe(dniTemp => {
        this.dniRecibido = dniTemp
      })
    }

    recibirDatosDeUsuario(){
      this.recibirDNI()

      this.http.get(`http://localhost:8000/api/ver-usuario/?dni=${this.dniRecibido}`).subscribe(user => {
        this.datosUsuario = user
      })

      return this.datosUsuario
    }
}
