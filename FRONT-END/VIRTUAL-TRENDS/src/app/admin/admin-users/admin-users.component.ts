import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  public formType: string = '';
  // usuario: usuario.usuario[] = [];
  @Input() type: string = '';

  constructor() { }

  ngOnInit() {
  }
  showForm(id: string) {
    this.formType = 'delete';
  }


}
