import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  constructor(translate: TranslateService) {

    let lang = localStorage.getItem("lang");

    if(isNullOrUndefined(lang)) {
      localStorage.setItem("lang", "ru");
      lang = "ru";
      console.log("11");
    }
    translate.setDefaultLang(lang);
  }
}
