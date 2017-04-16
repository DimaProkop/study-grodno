/**
 * Created by DENIS on 26.03.2017.
 */
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FacultyModel} from "../../model/faculty.model";
import {FacultyService} from "../../service/faculty/faculty.service";
import {SpecialityService} from "../../service/speciality/speciality.service";
import {SpecialityModel} from "../../model/speciality.model";

@Component({
  selector: 'app-faculty-builder',
  templateUrl: 'faculty-builder.component.html',
  styleUrls: ['faculty-builder.component.css'],
})
export class FacultyBuilderComponent {

  isEdit: boolean = false;
  @Input()
  formType: number;
  @Input()
  entity: FacultyModel;
  @Output() onChanged = new EventEmitter<FacultyModel>();

  save() {
    this.onChanged.emit(this.entity);
    this.isEdit = false;
  }

  errorMessage: string;

  constructor() {
  }

  ngOnChanges() {
    if (this.formType == 2) {
      this.isEdit = false;
    }
  }

  onEdit() {
    this.isEdit = true;
  }
}
