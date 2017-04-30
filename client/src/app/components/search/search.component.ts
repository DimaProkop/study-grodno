import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {LevelOfEducation} from "../../model/level-of-education.model";
import {Direction} from "../../model/direction.model";
import {FormOfEducation} from "../../model/form-of-education.model";
import {SearchService} from "../../service/search/search.service";
import {SearchModel} from "../../model/search.model";
import {SpecialityModel} from "../../model/speciality.model";
import {EducationInstitutionModel} from "../../model/education-institution.model";
import {isNull} from "util";
import {isNullOrUndefined} from "util";

@Component({
  moduleId: module.id,
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output()
  onChanged = new EventEmitter<SpecialityModel[]>();

  public specialities: SpecialityModel[];

  public searchParams: SearchModel;
  public levels: LevelOfEducation[];
  public directions: Direction[];
  public forms: FormOfEducation[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private searchService: SearchService) {
  }

  ngOnInit() {
    this.searchParams = new SearchModel();
    this.loadData();
    this.initParams();
    this.findByParams();
  }

  initParams() {
    this.route
      .params
      .subscribe(params => {
        this.searchParams.level = !isNullOrUndefined(params['level']) ? params['level'] : "";
        this.searchParams.direction = !isNullOrUndefined(params['direction']) ? params['direction'] : "";
        this.searchParams.form = !isNullOrUndefined(params['form']) ? params['form'] : "";
        this.searchParams.duration = !isNullOrUndefined(params['duration']) ? params['duration'] : "";
      });
  }

  /**
   * подргружает все нужны списки для формы
   */
  loadData() {

    this.levels = [];

    this.searchService.getLevels()
      .subscribe(result => {
        this.levels = result;
      });

    this.directions = [];

    this.searchService.getDirections()
      .subscribe(result => {
        this.directions = result;
      });

    this.forms = [];

    this.searchService.getForms()
      .subscribe(result => {
        this.forms = result;
      });
  }

  findByParams() {
    this.searchService.findSpecialityByParams(this.searchParams)
      .subscribe(specialities => {
        this.specialities = specialities;
        this.onChanged.emit(this.specialities);
      });
  }


  goSearch() {
   this.findByParams();

    this.router.navigate(['speciality', {
      level: this.searchParams.level, direction: this.searchParams.direction,
      form: this.searchParams.form, duration: this.searchParams.duration
    }]);

    this.initParams();
  }
}
