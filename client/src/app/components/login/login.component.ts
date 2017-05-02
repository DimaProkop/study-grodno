import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../service/login/login.service";
import {LoginModel} from "../../model/login.model";
import {UserModel} from "../../model/user.model";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {GET_USER} from "../../reducers/role.reducer";

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
              private router: Router,
              private store: Store<any>) {
  }

  ngOnInit() {
  }

  private authenticate() {
    console.log(this.login, this.password);
    this.loginService.login(new LoginModel(this.login, this.password))
      .subscribe(
        user => {
          if (user != null) {
            this.loginService.getCurrentUser().subscribe(x => {
              this.store.dispatch({ type: GET_USER, payload: x});
            });
            this.router.navigate(['/home']);
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
