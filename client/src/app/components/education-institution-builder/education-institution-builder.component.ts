import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FacultyModel } from "../../model/faculty.model";
import { SpecialityModel } from "../../model/speciality.model";
import { TypeEducationInstitution } from "../../model/type-education-institution.model";
import { EducationInstitutionModel } from "../../model/education-institution.model";

@Component({
  selector: 'app-education-institution-builder',
  styles: ['education-institution-builder.component.css'],
  templateUrl: 'education-institution-builder.component.html',
})

export class EducationInstitutionBuilderComponent {

  isEdit: boolean = false;

  @Input()
  formType: number;

  @Input()
  entity: EducationInstitutionModel;
  @Output() onChanged = new EventEmitter<EducationInstitutionModel>();
  save() {
    this.onChanged.emit(this.entity);
    this.isEdit = false;
  }
  typesEducationInstitution: TypeEducationInstitution[];

  constructor() {
  }

  ngOnChanges(){
    if (this.formType == 1) {
      this.isEdit = false;
      this.initTypeEducationInstitution();
    }
  }

  initTypeEducationInstitution() {
    this.typesEducationInstitution = [];
    this.typesEducationInstitution.push(new TypeEducationInstitution("Университет"));
    this.typesEducationInstitution.push(new TypeEducationInstitution("Колледж"));
  }

  onEdit() {
    this.isEdit = true;
  }
}
