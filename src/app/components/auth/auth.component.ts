import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  username: string;
  password: string;


  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.username, this.password)
      .subscribe(
        res => {
          console.log('received ok response from patch request');
          localStorage.setItem('jwt', JSON.stringify(res));
          this.router.navigate(['']);
        },
        error => {
          console.log('There was an error during the request');
          alert(error.message);
          console.log(error.message);
        }
      );
  }

}
