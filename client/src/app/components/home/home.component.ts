import {Component, OnInit, Input} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {TestModel} from "../../model/home.module";
import {Router} from "@angular/router";
import {LevelOfEducation} from "../../model/level-of-education.model";
import {Direction} from "../../model/direction.model";
import {SearchService} from "../../service/search/search.service";
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

  constructor(private store: Store<any>) {
  }

  ngOnInit(): void {
    this.store.select(x => x.roleUserReducer)
      .subscribe((x) => {
        console.log(x);
      });
  }
}
