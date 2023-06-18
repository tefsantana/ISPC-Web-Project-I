import { Injectable } from '@angular/core';
import { DniDataService } from '../data-services/dni-data.service';
import { Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnviarTallaPersonalizadaService {

  tallesPersonalizados: any

  constructor(private dni: DniDataService,
              private http: HttpClient) {

    this.tallesPersonalizados = {}
   }

   agregarDNI(){
    this.dni.recibirDNI().subscribe(DNI => {
      this.tallesPersonalizados.dni = DNI
      
      console.log(this.tallesPersonalizados + " Recien asignado")
    })
   }

   enviarTallaPersonalizada(tallas: any){
    this.agregarDNI()
    this.tallesPersonalizados = {
      tallas,
      dni: this.tallesPersonalizados.dni
    }

    const observer: Observer<Object> = {
      next: (response: Object) => {
        console.log('La petición se realizó con éxito: ', response);
      },
      error: (error: any) => {
        console.error('Error en la petición: ', error);
      },
      complete: () => {}
    };

    this.http.put('http://localhost/api/crear-talla-personalizada', this.tallesPersonalizados).subscribe(observer)


    const tallesJSON = JSON.stringify(this.tallesPersonalizados);
    console.log(tallesJSON + " posterior a put");
   }

}
