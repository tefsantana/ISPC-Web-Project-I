import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-editar-cuenta',
  templateUrl: './editar-cuenta.component.html',
  styleUrls: ['./editar-cuenta.component.css']
})
export class EditarCuentaComponent {
  formulario: any;
  constructor(private formBuilder: FormBuilder) {
  }
  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],

      telefono: ['', Validators.pattern('[0-9]{10}')],
    });
  }
  onSubmit() {

  }
}
