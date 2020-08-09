import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  username: string;
  password: string;

  constructor(private authService: AuthService) { }
  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.username, this.password)
      .subscribe(
        res => {
          console.log('received ok response from patch request');
          localStorage.setItem('jwt', JSON.stringify(res));
        },
        error => {
          console.error('There was an error during the request');
          console.log(error);
        }
      );
  }

}
