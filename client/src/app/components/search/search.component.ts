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
import {FacultyModel} from "../../model/faculty.model";
import {EducationInstitutionModel} from "../../model/education-institution.model";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public search: SearchModel;

  level: LevelOfEducation;
  vector: Direction;

  //списки
  public levels: LevelOfEducation[];
  public directions: Direction[];
  public forms: FormOfEducation[];
  public specialities: SpecialityModel[];
  public educations: EducationInstitutionModel[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private searchService: SearchService) {
  }

  ngOnInit() {

    this.educations = [];
    this.route
      .params
      .subscribe(params => {
        this.level = JSON.parse(params['level']);
        this.vector = JSON.parse(params['vector']);
      });

    this.search = {
      level: this.level,
      direction: this.vector,
      form: null,
      duration: null
    };
    this.findSpecialities(this.search);
    this.loadData();
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
        this.directions = result;
      });

    this.searchService.getForms()
      .subscribe(result => {
        this.forms = result;
      });
  }

  send(param: SearchModel) {
    this.search = {
      level: param.level,
      direction: param.direction,
      form: param.form,
      duration: param.duration
    };
    this.findSpecialities(this.search);
  }

  getEducBySpec(id: number): EducationInstitutionModel {
    let education: EducationInstitutionModel;
    this.searchService.getEducBySpec(id).subscribe(e => {
      education = e;
    });
    return education;
  }

  findSpecialities(req: SearchModel) {
    this.searchService.findByParams(req)
      .subscribe(result => {
        this.specialities = result;

        this.specialities.forEach(s => {
          this.searchService.getEducBySpec(s.id)
            .subscribe(educ => {
              s.education = educ;
            });
        });
      });
  }
}
