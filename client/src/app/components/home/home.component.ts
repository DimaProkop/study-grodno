import {Component, OnInit, Input} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {TestModel} from "../../model/home.module";
import {Router} from "@angular/router";
import {LevelOfEducation} from "../../model/level-of-education.model";
import {Direction} from "../../model/direction.model";
import {SearchService} from "../../service/search/search.service";

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  public myForm: FormGroup;

  //списки
  public levels: LevelOfEducation[];
  public vectors: Direction[];

  constructor(private _fb: FormBuilder,
              private router: Router,
              private searchService: SearchService) {

  }

  ngOnInit(): void {
    this.levels = [];
    this.vectors = [];
    this.loadData();
    this.myForm = new FormGroup({
      level: new FormControl(''),
      vector: new FormControl('')
    });
  }

  searchForParams({ value, valid }: { value: TestModel, valid: boolean }) {
    this.router.navigate(['/search', {level: value.level, vector: value.vector}]);
  }

  /**
   * подргружает все нужны списки для формы
   */
  loadData() {
    this.searchService.getLevels()
      .subscribe(result => {
        this.levels = result;
      });

    this.searchService.getDirections()
      .subscribe(result => {
        this.vectors = result;
      })
  }

}
