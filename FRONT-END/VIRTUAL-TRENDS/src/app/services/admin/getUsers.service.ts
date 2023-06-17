import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {
  private apiUsers = 'http://localhost:8000/api/users/';

constructor(private http : HttpClient) { }
  public get() {
    return this.http.get(this.apiUsers);
  }
}
