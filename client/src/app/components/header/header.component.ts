import {Component, OnInit} from "@angular/core";
import {LoginService} from "../../service/login/login.service";
import {AUTHORIZED} from "../../reducers/user.reducer";
import {Store} from "@ngrx/store";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  private isAuthorize: boolean;

  constructor(private loginService: LoginService,
              private store: Store<any>,
              private translateService: TranslateService) {
  }

  ngOnInit() {

    this.isAuthorize = false;
    this.store
      .select(x => x.userReducer)
      .subscribe((x) => {
        console.log(x);
        this.isAuthorize = x === AUTHORIZED;
        if (!this.isAuthorize) {
          console.log("LOGIN ACCESSIBLE NOW");
        }
      });
  }

  logout() {
    this.loginService.logout()
      .subscribe(() => {

      })
  }

  changeLanguage(lang: string) {
    localStorage.setItem("lang", lang);
    this.translateService.use(lang);
  }

}
