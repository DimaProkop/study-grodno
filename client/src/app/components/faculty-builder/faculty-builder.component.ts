/**
 * Created by DENIS on 26.03.2017.
 */
import {Component, OnInit } from '@angular/core';
import {FacultyModel} from "../../model/faculty.model";
import {FacultyService} from "../../service/faculty/faculty.service";
import {SpecialityService} from "../../service/speciality/speciality.service";
import {SpecialityModel} from "../../model/speciality.model";

@Component({
  selector: 'app-faculty-builder',
  templateUrl: 'faculty-builder.component.html',
  styleUrls: ['faculty-builder.component.css'],
})
export class FacultyBuilderComponent implements OnInit {

  errorMessage: string;
  faculty: FacultyModel;
  faculties: FacultyModel[];
  specialities: SpecialityModel[];

  constructor(private facultyService: FacultyService, private  specialityService: SpecialityService) {
    this.faculty = new FacultyModel();
    this.faculty.specialities = [];
    this.faculties = [];
  }
  ngOnInit() {
    this.initFaculty();
    this.initSpeciality();
  }

  save(): void {
    this.facultyService.create(this.faculty)
      .subscribe(
        faculty => {
          this.faculty = faculty;
          this.faculties.push(this.faculty);
        },
        error => this.errorMessage = <any>error
      );
  }

  addSpeciality(item: SpecialityModel): void {
    this.faculty.specialities.push(item);
    console.log(this.faculty);
  }

  initFaculty() {
    this.facultyService.getAll()
      .subscribe(
        faculties => {
          this.faculties = faculties;
          console.log(this.faculties);
        },
        error => this.errorMessage = <any>error
      );
  }

  initSpeciality() {
    this.specialityService.getAll()
      .subscribe(
        specialities => {
          this.specialities = specialities;
        },
        error => this.errorMessage = <any>error
      );
  }

}
