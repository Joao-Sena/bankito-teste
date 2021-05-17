import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  urlBase: string = environment.urlBase;

  constructor(private http: HttpClient) { }

  logIn(body: Login) {
    const url: string = `${this.urlBase}/login`;

    return this.http.post(url, body);
  }

}
