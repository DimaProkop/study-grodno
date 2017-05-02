/**
 * Created by DENIS on 01.05.2017.
 */
import {Component, OnInit} from '@angular/core';
import {EducationInstitutionService} from "../../service/education-institution/education-institution.service";
import {ActivatedRoute, Router} from "@angular/router";
import {EducationInstitutionModel} from "../../model/education-institution.model";
import {FacultyModel} from "../../model/faculty.model";
import {FacultyService} from "../../service/faculty/faculty.service";

@Component({
  selector: 'app-faculty-institution',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

  public faculties: FacultyModel[];

  constructor(private facultyService: FacultyService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {

    this.init();
  }

  init(): void {

    this.faculties = [];
    this.route.parent
      .params
      .subscribe(param => {
        this.facultyService.getFacultiesByInstitution(+param["id"]).subscribe(result => {
          this.faculties = result;
        });
      });
  }
}
