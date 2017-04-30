import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../service/login/login.service";
import {AUTHORIZED} from "../../reducers/user.reducer";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  private isAuthorize: boolean;

  constructor(private loginService: LoginService,
              private router: Router,
              private store: Store<any>) {
  }

  ngOnInit() {
    this.isAuthorize = false;
    this.store
      .select(x => x.userReducer)
      .subscribe((x) => {
        console.log(x);
        this.isAuthorize = x === AUTHORIZED;
        if (!this.isAuthorize){
          console.log("LOGIN ACCESSIBLE NOW");
        }
      });
  }


  logout() {
    this.loginService.logout()
      .subscribe(() => {

      })
  }

}
