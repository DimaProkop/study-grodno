import { Component, OnInit } from '@angular/core';
import {EducationInstitutionService} from "../../service/education-institution/education-institution.service";
import {ActivatedRoute, Router} from "@angular/router";
import {EducationInstitutionModel} from "../../model/education-institution.model";

@Component({
  selector: 'app-education-institution',
  templateUrl: './education-institution.component.html',
  styleUrls: ['./education-institution.component.css']
})
export class EducationInstitutionComponent implements OnInit {

  public institutions: EducationInstitutionModel[];

  constructor(private educationInstitutionService: EducationInstitutionService, private router: Router) { }

  ngOnInit() {
    this.init();
  }

  init(): void {

    this.institutions = [];

      this.educationInstitutionService.getAll().subscribe(result => {
        console.log(result);
        this.institutions = result;
      });
  }

  getCountSpeciality(id: number): number {

    let countSpeciality = 0;

    for(let i = 0; i < this.institutions.length; i++) {
      if(this.institutions[i].id == id) {
        for(let j = 0; j < this.institutions[i].faculties.length; j++) {
          countSpeciality += this.institutions[i].faculties[j].specialities.length;
        }
      }
    }

    return countSpeciality;
  }

  goDetail(id: number): void {
    this.router.navigate(['institution/', id]);
  }

}
