import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  /*isVisible = false;*/
  nameLogin: string = 'UnUsuario';
  userLoginOn: boolean = false;
  constructor(private navigationService: NavigationService, private loginService: LoginService){}
  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe(
      {
        next:(userLoginOn)=>{
          this.userLoginOn = userLoginOn;
        }
      }
    );  
    this.loginService.currentUserData.subscribe(
      {
        next:(userData) =>{
          this.nameLogin = userData.nombre !== undefined ? userData.nombre : 'SinIdentificar';
        }
      }
    );  
  }

  navigate() {
    this.navigationService.navigateToProducts();
  }

  navigateToContacto(){
    this.navigationService.navigateToContacto();  
  }

  navigateToUsuario(){
    this.navigationService.navigateToUsuario();
  }

  navigateToCuenta(){
    this.navigationService.navigateToCuenta();
  }

  navigateToFavoritos(){
    this.navigationService.navigateToFavoritos();
  }
  
  navigateToCarrito(){
    this.navigationService.navigateToCarrito();
  }

  navigateToNosotros(){
    this.navigationService.navigateToNosotros();
  }

  
}