import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/auth/login.service';
import { LoginRequest } from 'src/app/services/auth/loginrequest';

@Component({
  selector: 'app-login-logup',
  templateUrl: './login-logup.component.html',
  styleUrls: ['./login-logup.component.css']
})
export class LoginLogupComponent {
  public showRecoverPassText: boolean = false;
  loginError:string = ""
  loginForm = this.formBuilder.group({
    email:['',[Validators.required, Validators.email,]],
    psw:['', [Validators.required]],
  })
  constructor(private navigationService: NavigationService, private formBuilder: FormBuilder, private loginService: LoginService) {}

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
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
        next:(userData) =>{
          console.log(userData);
        },
        error:(errorData) =>{
          console.error(errorData);
          this.loginError = errorData;
        },
        complete:()=>{
          console.info('Login completo');
          this.loginForm.reset();
          this.navigationService.navigateToHome();
        }
        
      });
      
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
