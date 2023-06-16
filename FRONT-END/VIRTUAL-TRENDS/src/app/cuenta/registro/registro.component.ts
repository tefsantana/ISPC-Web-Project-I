import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  logupForm = this.formBuilder.group({
    email:['',[Validators.required, Validators.email,]],
    psw:['', [Validators.required]],
    nombre:['',[Validators.required]],
    apellido:['',[Validators.required]],
    dni:['',[Validators.required, Validators.pattern('^[0-9]+$')]],
    cp:['',[Validators.required]],
    dir_nombre:['',[Validators.required]],
    dir_num:['',[Validators.required, Validators.pattern('^[0-9]+$')]],
    ph:['',[Validators.required]],
    tel:['',[Validators.required, Validators.pattern('^[0-9]+$')]],
    ciudad:['',[Validators.required]],
    provincia:['',[Validators.required]],
  })

  constructor(private navigationService: NavigationService, private formBuilder: FormBuilder) {}

  closePopUp() {
    this.navigationService.navigateToCuenta();
  }

  logup(){
    if(this.logupForm.valid){
      this.logupForm.reset();
      //Llamar a la api
    }
    else{
      this.logupForm.markAllAsTouched();
    }
  }

  get formguid(){
    return this.logupForm.controls
  }

}
