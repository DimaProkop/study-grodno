import { Component, OnInit } from '@angular/core';
import {EducationInstitutionService} from "../../service/education-institution/education-institution.service";
import {ActivatedRoute} from "@angular/router";
import {EducationInstitutionModel} from "../../model/education-institution.model";

@Component({
  selector: 'app-education-institution',
  templateUrl: './education-institution.component.html',
  styleUrls: ['./education-institution.component.css']
})
export class EducationInstitutionComponent implements OnInit {

  public education: EducationInstitutionModel;

  constructor(private educService: EducationInstitutionService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(par => {
      this.educService.getUniversityById(par['id']).subscribe(result => {
        console.log(result);
        this.education = result;
        console.log(this.education);

      });
    })
  }

}
