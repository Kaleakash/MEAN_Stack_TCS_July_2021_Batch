import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './login.model';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http:HttpClient) { }

  checkUserInfo():Observable<Login[]> {
    return this.http.get<Login[]>("/assets/login.json");
  }
}
