import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogupService {

  constructor(private http: HttpClient) {}

  logup(register:any):Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/logup/', register);
  }
}
