/**
 * Created by DENIS on 26.03.2017.
 */
import {Component, OnInit } from '@angular/core';
import {UniversityService} from "../../service/university/university.service";
import {UniversityModel} from "../../model/university.model";
import {FacultyModel} from "../../model/faculty.model";
import {FacultyService} from "../../service/faculty/faculty.service";

@Component({
  selector: 'app-university-builder',
  templateUrl: 'university-builder.component.html',
  styleUrls: ['university-builder.component.css'],
})
export class UniversityBuilderComponent implements OnInit {

  errorMessage: string;
  university: UniversityModel;
  universities: UniversityModel[];
  departments: FacultyModel[];

  constructor(private universityService: UniversityService, private facultyService: FacultyService) {
    this.university = new UniversityModel();
    this.university.departments = [];
    this.universities = [];
  }
  ngOnInit() {
    this.initFaculty();
    this.initUniversity();
  }

  save(): void {

    this.universityService.create(this.university)
      .subscribe(
        university => {
          this.university = university;
          this.universities.push(this.university);
          console.log(this.university);
        },
        error => this.errorMessage = <any>error
      );
  }

  addFaculty(item: FacultyModel): void {
    this.university.departments.push(item);
    console.log(this.university);
  }

  initUniversity() {
    this.universityService.getAll()
      .subscribe(
        universities => {
          this.universities = universities;
          console.log(this.universities);
        },
        error => this.errorMessage = <any>error
      );
  }

  initFaculty() {
    this.facultyService.getAll()
      .subscribe(
        departments => {
          this.departments = departments;
          console.log(this.departments);
        },
        error => this.errorMessage = <any>error
      );
  }

}
