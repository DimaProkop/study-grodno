/**
 * Created by DENIS on 29.04.2017.
 */
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SpecialityModel} from "../../model/speciality.model";
import {SpecialityService} from "../../service/speciality/speciality.service";
import {EducationInstitutionService} from "../../service/education-institution/education-institution.service";
import {SearchService} from "../../service/search/search.service";
import {EducationInstitutionModel} from "../../model/education-institution.model";
import {FacultyModel} from "../../model/faculty.model";
import {FacultyService} from "../../service/faculty/faculty.service";

@Component({
  selector: 'app-speciality-detail',
  templateUrl: './speciality-detail.component.html',
  styleUrls: ['./speciality-detail.component.css']
})

export class SpecialityDetailComponent implements OnInit {

  speciality: SpecialityModel;
  institution: EducationInstitutionModel;
  faculty: FacultyModel;

  constructor(private route: ActivatedRoute, private specialityService: SpecialityService,
              private searchService: SearchService, private facultyService: FacultyService) {

  }

  ngOnInit(): void {
    this.initEntity();
  }

  initEntity() {

    this.speciality = new SpecialityModel();
    this.institution = new EducationInstitutionModel();
    this.faculty = new FacultyModel();

    this.route
      .params
      .subscribe(param => {
        this.specialityService.getById(+param["id"]).subscribe(item => {
          this.speciality = item;
          this.searchService.getInsitutionBySpeciality(+param["id"]).subscribe(institution => {
            this.institution = institution;
          });
          this.facultyService.getFacultyBySpeciality(+param["id"]).subscribe(faculty => {
            this.faculty = faculty;
          });
        });
      });
  }
}
