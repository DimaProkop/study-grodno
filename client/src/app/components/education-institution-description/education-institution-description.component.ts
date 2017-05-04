/**
 * Created by DENIS on 03.05.2017.
 */
import {Component, OnInit} from '@angular/core';
import {EducationInstitutionService} from "../../service/education-institution/education-institution.service";
import {ActivatedRoute, Router} from "@angular/router";
import {EducationInstitutionModel} from "../../model/education-institution.model";

@Component({
  selector: 'app-education-institution-description',
  templateUrl: './education-institution-description.component.html',
  styleUrls: ['./education-institution-description.component.css']
})
export class EducationInstitutionDescriptionComponent implements OnInit {

  public institution: EducationInstitutionModel;

  constructor(private educationInstitutionService: EducationInstitutionService, private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.init();
  }

  init(): void {

    this.institution = new EducationInstitutionModel();
    this.route.parent
      .params
      .subscribe(param => {
        this.educationInstitutionService.getById(+param["id"]).subscribe(result => {
          this.institution = result;
        });
      });
  }
}
