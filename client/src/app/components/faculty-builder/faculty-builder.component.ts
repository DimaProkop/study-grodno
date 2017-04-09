/**
 * Created by DENIS on 26.03.2017.
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FacultyModel } from "../../model/faculty.model";
import { FacultyService } from "../../service/faculty/faculty.service";
import { SpecialityService } from "../../service/speciality/speciality.service";
import { SpecialityModel } from "../../model/speciality.model";

@Component({
  selector: 'app-faculty-builder',
  templateUrl: 'faculty-builder.component.html',
  styleUrls: ['faculty-builder.component.css'],
})
export class FacultyBuilderComponent implements OnInit {

  @Input()
  formType: number;
  @Input()
  entity: FacultyModel;
  @Output() onChanged = new EventEmitter<FacultyModel>();
    save() {
        this.onChanged.emit(this.entity);
  }

  errorMessage: string;
  faculties: FacultyModel[];
  specialities: SpecialityModel[];

  constructor(private facultyService: FacultyService, private specialityService: SpecialityService) {
    this.entity = new FacultyModel();
    this.entity.specialities = [];
    this.faculties = [];
  }
  ngOnInit() {
  }

  addSpeciality(item: SpecialityModel): void {
    this.entity.specialities.push(item);
    console.log(this.entity);
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
