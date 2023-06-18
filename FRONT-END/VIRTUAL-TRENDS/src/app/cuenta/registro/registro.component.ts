import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { FormBuilder, Validators } from '@angular/forms';
import { LogupService } from 'src/app/services/register/logup.service';

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
    dir_calle:['',[Validators.required]],
    dir_numero:['',[Validators.required, Validators.pattern('^[0-9]+$')]],
    ph:['',[Validators.required]],
    tel_cel:['',[Validators.required, Validators.pattern('^[0-9]+$')]],
    ciudad:['',[Validators.required]],
    provincia:['',[Validators.required]],
  })
  registroOK:boolean = false;
  regerror: string = "";
  constructor(private navigationService: NavigationService, private formBuilder: FormBuilder, private logupService: LogupService) {}

  closePopUp() {
    this.navigationService.navigateToCuenta();
  }

  logup(){
    if(this.logupForm.valid){
      this.logupService.logup(this.logupForm.value).subscribe(
        {
          next:(logupmsj) => {
            console.log(logupmsj);
          },
          error:(logupmsj)=>{
            console.error(logupmsj);
            this.regerror = logupmsj.error.error;
          },
          complete:()=>{
            console.info("Registro satisfactorio");
            this.registroOK = true;
          }
        }
      );
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
