import {Component, OnInit} from "@angular/core";
import {LoginService} from "../../service/login/login.service";
import {AUTHORIZED} from "../../reducers/user.reducer";
import {Store} from "@ngrx/store";
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";
import {MailService} from "../../service/mail/mail.service";

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  providers: [MailService]
})
export class HeaderComponent implements OnInit {

  private isAuthorize: boolean;
  private count: number;

  constructor(private router: Router, private loginService: LoginService,
              private store: Store<any>,
              private translateService: TranslateService, private mailService: MailService) {
  }

  ngOnInit() {
    this.count = 0;
    this.isAuthorize = false;
    this.store
      .select(x => x.userReducer)
      .subscribe((x) => {
        console.log(x);
        this.isAuthorize = x === AUTHORIZED;
        if (!this.isAuthorize) {
          console.log("LOGIN ACCESSIBLE NOW");
          if (this.isAuthorize) {
            this.mailService.getInc()
              .subscribe(x => {
                this.count = x;
              });
          }
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
