import {Component, OnInit, ElementRef} from "@angular/core";
import * as jQuery from 'jquery';
import {Store} from "@ngrx/store";
import {UserModel} from "../../model/user.model";

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  public user: UserModel;

  constructor(private store: Store<any>,
              private element: ElementRef) {
  }

  ngOnInit(): void {
  }

  showPanel() {
    jQuery("div#panel").slideUp("slow");
  }

  hidePanel() {
    jQuery("div#panel").slideDown("slow");
  }
}
