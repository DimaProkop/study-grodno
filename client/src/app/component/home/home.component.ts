import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../service/home/home.service";
import {Message} from "../../model/message";
import {toPromise} from "rxjs/operator/toPromise";
import {LoginService} from "../../service/login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'header',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  providers: [LoginService]
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
  }

  isSignedIn:boolean;

  constructor(private router:Router, private loginService:LoginService) {
    this.isSignedIn = loginService.isSignedIn();
    router.events.subscribe(() => {
      this.isSignedIn = loginService.isSignedIn();
    });
  }

  login(event, email, password) {
    event.preventDefault();
    this.loginService.login(email, password)
      .subscribe(() => {
        this.router.navigate(['/add']);
      }, this.handleError)
    ;
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

  handleError(error) {
    console.log(error.status);
  }

}
