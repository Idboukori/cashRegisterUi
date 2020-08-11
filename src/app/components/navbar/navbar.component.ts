import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  localstorage: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if (localStorage.jwt === undefined) {
      this.localstorage = false;
    } else {
      this.localstorage = true;
    }
  }
}
