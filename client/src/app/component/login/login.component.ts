import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../service/login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(private router:Router, private loginService:LoginService) {
  }

  login(event, email, password) {
    event.preventDefault();
    this.loginService.login(email, password)
      .subscribe(() => {
        this.router.navigate(['/add']);
      }, this.handleError);
  }

  logout():void {
    localStorage.removeItem('jwt');
  }


  handleError(error) {
    console.log(error.status);
  }


}
