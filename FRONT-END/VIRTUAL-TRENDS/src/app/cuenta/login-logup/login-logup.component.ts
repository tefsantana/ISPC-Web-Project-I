import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-logup',
  templateUrl: './login-logup.component.html',
  styleUrls: ['./login-logup.component.css']
})
export class LoginLogupComponent {
  public showRecoverPassText: boolean = false;
  loginForm = this.formBuilder.group({
    email:['',[Validators.required, Validators.email,]],
    psw:['', [Validators.required]],
  })
  constructor(private navigationService: NavigationService, private formBuilder:FormBuilder) {}

  navigateToRegistro() {
    this.navigationService.navigateToRegistro();
  }

  closePopUp() {
    this.navigationService.navigateToHome();
  }

  showRecoverPass() {
    this.showRecoverPassText = !this.showRecoverPassText;
  }

  login(){
    if(this.loginForm.valid){
      //Llamar servicio
      this.navigationService.navigateToHome();
      this.loginForm.reset();
    }
    else{
      this.loginForm.markAllAsTouched();
      //datos no validos
    }
  }

  get email(){
    return this.loginForm.controls.email;
  }

  get psw(){
    return this.loginForm.controls.psw;
  }
}
