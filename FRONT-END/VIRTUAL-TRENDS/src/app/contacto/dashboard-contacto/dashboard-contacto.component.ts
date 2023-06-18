import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DashboardContactoMocksService } from '../../services/mocks/dashboard-contacto-mocks.service';

@Component({
  selector: 'app-dashboard-contacto',
  templateUrl: './dashboard-contacto.component.html',
  styleUrls: ['./dashboard-contacto.component.css']
})


export class DashboardContactoComponent {
  formularioContacto: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactoService: DashboardContactoMocksService
  ) {
    this.formularioContacto = this.fb.group({
      nombreCompleto: '',
      telefono: '',
      email: '',
      mensaje: ''
    });
  }

  enviarFormularioContacto() {
    const formulario = this.formularioContacto.value;
    console.log('Datos del formulario:', formulario);
    this.contactoService.enviarFormularioContacto(formulario);
  }

  obtenerContactos() {
    const contactos = this.contactoService.obtenerContactos();
    console.log(contactos);
  }
}

