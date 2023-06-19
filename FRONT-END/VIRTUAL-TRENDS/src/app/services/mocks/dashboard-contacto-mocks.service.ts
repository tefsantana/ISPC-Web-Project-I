
/*import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DashboardContactoMocksService {
  private contactos: any[] = [];
  constructor() { }
  public enviarFormularioContacto(formularioContacto: any): void {
    this.contactos.push(formularioContacto);
    console.log('Formulario de contacto enviado:', formularioContacto);
  }
  public obtenerContactos(): any[] {
    console.log('Contactos obtenidos:', this.contactos);
    return this.contactos;
  }
}*/
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DashboardContactoMocksService {
  private contactosKey = 'contactos';
  constructor() {}
  /*public enviarFormularioContacto(formularioContacto: any): void {
    const contactos = this.obtenerContactos();
    contactos.push(formularioContacto);
    this.guardarContactos(contactos);
    console.log('Formulario de contacto enviado:', formularioContacto);
  }
  public obtenerContactos(): any[] {
    const contactosString = localStorage.getItem(this.contactosKey);
    if (contactosString) {
      return JSON.parse(contactosString);
    }
    return [];
  }
  private guardarContactos(contactos: any[]): void {
    localStorage.setItem(this.contactosKey, JSON.stringify(contactos));
    console.log('Contactos guardados:', contactos);
  }*/
}


