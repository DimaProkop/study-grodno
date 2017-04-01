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

    this.facultyService.getAll()
      .subscribe(
        faculties => {
          this.faculties = faculties;
          console.log(this.faculties);
        },
        error => this.errorMessage = <any>error
      );
  }

  save(): void {
    this.faculties.push(this.faculty);
  }

}
