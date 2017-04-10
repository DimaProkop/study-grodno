import {Component, OnInit, Input} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Vector} from "../../model/home.module";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  array: string[] = ["smth", "smth2", "pisun"];
  public myForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];

  //списки
  public levels: string[];
  public vectors: string[];

  constructor(private _fb: FormBuilder, private router: Router) {

  }

  ngOnInit(): void {
    this.levels = [];
    this.vectors = [];
    this.myForm = new FormGroup({
      level: new FormControl('', [<any>Validators.required]),
      vector: new FormControl('', [<any>Validators.required])
    });
  }

  searchForParams({ value, valid }: { value: Vector, valid: boolean }) {
    this.router.navigate(['/search', {level: value.level, vector: value.vector}]);
  }

  /**
   * потом сюда догружу с сервиса направления и уровни
   */
  loadData() {

  }

}
