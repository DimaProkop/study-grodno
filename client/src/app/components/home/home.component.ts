import {Component, OnInit} from "@angular/core";
import * as jQuery from 'jquery';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
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
