
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DashboardContactoMocksService } from '../../services/mocks/dashboard-contacto-mocks.service'
@Component({
  selector: 'app-dashboard-contacto',
  templateUrl: './dashboard-contacto.component.html',
  styleUrls: ['./dashboard-contacto.component.css']
})

export class DashboardContactoComponent implements OnInit {
  /*formularioContacto = this.formBuilder.group({
    
    nombre:['',[Validators.required]],
    email:['',[Validators.required, Validators.email,]],
    tel_cel:['',[Validators.required, Validators.pattern('^[0-9]+$')]],
    mensaje:['',[Validators.required]],
  })
  */
  
  /*regerror: string = "";*/
  formularioContacto: FormGroup;
  constructor(
    /*private navigationService: NavigationService,*/
    private fb: FormBuilder,
    private contactoService: DashboardContactoMocksService,
    /*private contactoService: contactoService*/
  ) {
    this.formularioContacto = this.fb.group({
      nombreCompleto: '',
      telefono: '',
      email: '',
      mensaje: ''
    });
  }
  envioOK:boolean = false;
  ngOnInit() {
    console.log('Valor inicial de envioOK:', this.envioOK);
  }
  enviarFormularioContacto() {
    const formulario = this.formularioContacto.value;
    console.log('Datos del formulario:', formulario);
    /*setTimeout(() => {*/
    this.envioOK = true;
    /*}, 500);*/
    this.formularioContacto.reset();
    /*const contactos = this.obtenerContactos();
    contactos.push(formularioContacto);
    this.guardarContactos(contactos);
    console.log('Formulario de contacto enviado:', formularioContacto);*/
    /*const formulario = this.formularioContacto.value;
    console.log('Datos del formulario:', formulario);
    this.contactoService.enviarFormularioContacto(formulario);
    setTimeout(() => {
      this.envioOK = true;
    }, 500);*/
  }
  
  closePopUp() {
    this.envioOK = false;
    /*this.navigationService.navigateToHome();*/
  }
  /*
  obtenerContactos() {
    const contactos = this.contactoService.obtenerContactos();
    console.log(contactos);
  }*/
}
