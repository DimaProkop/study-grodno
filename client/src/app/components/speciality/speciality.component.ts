import {Component, OnInit, ElementRef} from "@angular/core";
import {SpecialityModel} from "../../model/speciality.model";
import {SearchModel} from "../../model/search.model";
import {SearchService} from "../../service/search/search.service";
import {isNullOrUndefined} from "util";
import {ActivatedRoute, Router} from "@angular/router";
import * as jQuery from 'jquery';

@Component({
  selector: 'app-speciality',
  templateUrl: './speciality.component.html',
  styleUrls: ['./speciality.component.css']
})

export class SpecialityComponent implements OnInit {

  public specialities: SpecialityModel[];
  public searchParams: SearchModel;
  public institution: any[];

  constructor(private searchService: SearchService, private route: ActivatedRoute,
              private router: Router, private element: ElementRef) {
  }

  ngOnInit() {
    this.searchParams = new SearchModel();
    this.initParams();
    this.findByParams();
  }

  onChanged(entity) {
    this.specialities = entity;
  }

  findByParams() {
    this.searchService.findSpecialityByParams(this.searchParams)
      .subscribe(specialities => {
        this.specialities = specialities;

        this.institution = [];

        for (let i = 0; i < this.specialities.length; i++) {

          this.searchService.getInsitutionBySpeciality(this.specialities[i].id).subscribe(item => {
            this.institution.push({
              id: this.specialities[i].id,
              object: item
            });
          });
        }
      });
  }

  getInstitution(id) {

    if (isNullOrUndefined(this.institution)) {
      this.institution = [];
    }

    let temp;

    for (let i = 0; i < this.institution.length; i++) {
      if (this.institution[i].id == id) {
        temp = this.institution[i].object;
        break;
      }
    }

    return temp;
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

  goDetail(id) {
    this.router.navigate(['speciality', id]);
  }

  addAndRemoveClassToFavorites(id) {

    if (jQuery(this.element.nativeElement).find('#' + id).hasClass('glyphicon glyphicon-star-empty')) {
      jQuery(this.element.nativeElement).find('#' + id).removeClass("glyphicon glyphicon-star-empty").addClass("glyphicon glyphicon-star");
    } else {
      jQuery(this.element.nativeElement).find('#' + id).removeClass("glyphicon glyphicon-star").addClass("glyphicon glyphicon-star-empty");
    }
  }
}



