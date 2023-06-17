import { Component, OnInit, Input } from '@angular/core';
import { GetUsersService } from 'src/app/services/admin/getUsers.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  public formType: string = '';
  // usuario: usuario.usuario[] = [];
  @Input() type: string = '';
  users = [];

  constructor(private UsersService: GetUsersService) { }

  ngOnInit() {
    this.UsersService.get().subscribe((data: any) => {
      this.users = data;
      Array.from(this.users).forEach((user: any) => {
        user.dni = (user.dni).toLocaleString();
        user.dni = user.dni.split(',').join('.');
      });
    }
    );
  }
  showForm(id: string) {
    this.formType = 'delete';
  }


}
