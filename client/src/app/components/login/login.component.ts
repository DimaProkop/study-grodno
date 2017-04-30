import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../service/login/login.service";
import {LoginModel} from "../../model/login.model";
import {UserModel} from "../../model/user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  private errorMessage: string;

  private login: string;

  private password: string;

  private user: UserModel;

  constructor(private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit() {
  }

  private authenticate() {
    console.log(this.login, this.password);
    this.loginService.login(new LoginModel(this.login, this.password))
      .subscribe(
        user => {
          if (user != null) {
            this.router.navigate(['/summary']);
          } else {
            console.log("invalid user!");
            this.router.navigate(['/login'])
          }
          this.user = user;
        },
        error => this.errorMessage = <any>error
      );
  }

}
