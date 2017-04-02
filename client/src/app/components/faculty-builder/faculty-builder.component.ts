/**
 * Created by DENIS on 26.03.2017.
 */
import {Component, OnInit } from '@angular/core';
import {FacultyModel} from "../../model/faculty.model";
import {FacultyService} from "../../service/faculty/faculty.service";
import {SpecialityService} from "../../service/speciality/speciality.service";

@Component({
  selector: 'app-faculty-builder',
  templateUrl: 'faculty-builder.component.html',
  styleUrls: ['faculty-builder.component.css'],
})
export class FacultyBuilderComponent implements OnInit {

  errorMessage: string;
  faculty: FacultyModel;
  faculties: FacultyModel[];

  constructor(private facultyService: FacultyService, private  specialityService: SpecialityService) {
    this.faculty = new FacultyModel();
    this.faculties = [];
  }
  ngOnInit() {
    this.initFaculty();
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

  initFaculty() {
    this.facultyService.getAll()
      .subscribe(
        faculties => {
          this.faculties = faculties;
        },
        error => this.errorMessage = <any>error
      );
  }

}
