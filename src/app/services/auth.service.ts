import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL = 'http://localhost:10300/api';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post(`${this.apiURL}/login_check`, { username, password });
  }


  loggedIn() {
    return !!localStorage.getItem('jwt');
  }

}
