import { Component, OnInit, Input } from '@angular/core';
import { GetUsersService } from 'src/app/services/admin/getUsers.service';
import { DeleteUserService } from 'src/app/services/admin/deleteUser.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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
  public mensajeEnviado: boolean = false;
  idUsuarioForm: FormGroup;
  idUsuarioInvalid: boolean = false;
  mensajeEliminado: boolean = false;


  constructor(private UsersService: GetUsersService, private formBuilder: FormBuilder, private deleteUserService: DeleteUserService ) {
    this.idUsuarioForm = this.formBuilder.group({
      idUsuario: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]]
    });
   }

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
  eliminarUsuario() {
    if (this.idUsuarioForm.valid) {
      const idUsuario = this.idUsuarioForm.value.idUsuario;
      // Lógica para eliminar el usuario con el ID proporcionado
      console.log('ID de usuario a eliminar:', idUsuario);
      this.mensajeEliminado = true;
    } else {
      this.idUsuarioInvalid = true;
    }
  }

  get idUsuario() {
    return this.idUsuarioForm.controls['idUsuario'];

  }
}



