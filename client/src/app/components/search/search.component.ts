import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LevelOfEducation} from "../../model/level-of-education.model";
import {Direction} from "../../model/direction.model";
import {FormOfEducation} from "../../model/form-of-education.model";
import {SearchService} from "../../service/search/search.service";
import {Validators, FormControl, FormGroup} from "@angular/forms";
import {SearchModel} from "../../model/search.model";
import {SpecialityModel} from "../../model/speciality.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public myForm: FormGroup;

  level: LevelOfEducation;
  vector: Direction;

  //списки
  public levels: LevelOfEducation[];
  public vectors: Direction[];
  public forms: FormOfEducation[];
  public specialities: SpecialityModel[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private searchService: SearchService) {
  }

  ngOnInit() {

    this.myForm = new FormGroup({
      level: new FormControl('', [<any>Validators.required]),
      vector: new FormControl('', [<any>Validators.required]),
      form: new FormControl('', [<any>Validators.required]),
      duration: new FormControl('', [<any>Validators.required])
    });
    this.route
      .params
      .subscribe(params => {
        this.level = params['level'];
        this.vector = params['vector'];
      });
    this.loadData();
  }

  /**
   * подргружает все нужны списки для формы
   */
  loadData() {

    let request = new SearchModel(
      this.level,
      this.vector,
      null,
      null
    );
    this.findSpecialities(request);

    this.searchService.getLevels()
      .subscribe(result => {
        this.levels = result;
      });

    this.searchService.getDirections()
      .subscribe(result => {
        this.vectors = result;
      });

    this.searchService.getForms()
      .subscribe(result => {
        this.forms = result;
      });
  }

  searchForParams({values}: {values: SearchModel}) {
    let request = new SearchModel(
      values.level,
      values.direction,
      values.form,
      values.duration);

    this.searchService.findByParams(request)
      .subscribe(result => {
        this.specialities = result;
      })
  }

  findSpecialities(req: SearchModel) {
    this.searchService.findByParams(req)
      .subscribe(result => {
        this.specialities = result;
      });
  }

}
