import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-pago-typ',
  templateUrl: './pago-typ.component.html',
  styleUrls: ['./pago-typ.component.css']
})
export class PagoTypComponent implements OnInit {

  constructor(private navigate: NavigationService) { }

  ngOnInit() {
  }

  navigateToHome() {
    this.navigate.navigateToHome();
  }



}
