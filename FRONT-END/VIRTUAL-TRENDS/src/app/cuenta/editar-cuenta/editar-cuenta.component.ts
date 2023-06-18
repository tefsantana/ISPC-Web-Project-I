import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-editar-cuenta',
  templateUrl: './editar-cuenta.component.html',
  styleUrls: ['./editar-cuenta.component.css']
})
export class EditarCuentaComponent {
  formulario: any;
  public mensajeEnviado: boolean = false;
  constructor(private formBuilder: FormBuilder, ) {
  }
  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      documentodeidentidad: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      calle: ['', Validators.required],
      altura: ['', Validators.required],
      ph: ['', Validators.required],
      cp: ['', Validators.required],
      ciudad: ['', Validators.required],
      provincia: ['', Validators.required],
      telefono: ['', Validators.pattern('[0-9]{10}')],
    });
  }
  onSubmit(event: Event) {
      event.preventDefault();
      if(this.formulario.valid){
        alert("enviando")
        this.mensajeEnviado = true;
      }
      else{
        this.formulario.markAllAsTouched()
      }
    }
    cerrarEditarCuenta(){



    }

  }

