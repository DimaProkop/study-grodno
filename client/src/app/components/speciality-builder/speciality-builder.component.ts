/**
 * Created by DENIS on 26.03.2017.
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SpecialityModel } from "../../model/speciality.model";
import { isNullOrUndefined } from "util";
import { SpecialityService } from "../../service/speciality/speciality.service";
import { LanguageLearning } from "../../model/language-learning.model";
import { FormOfEducation } from "../../model/form-of-education.model";

@Component({
  selector: 'app-speciality-builder',
  templateUrl: 'speciality-builder.component.html',
  styleUrls: ['speciality-builder.component.css']
})
export class SpecialityBuilderComponent implements OnInit {

  @Input()
  formType: number;

  @Input()
  entity: SpecialityModel;
  @Output() onChanged = new EventEmitter<SpecialityModel>();
    save() {
        this.onChanged.emit(this.entity);
  }

  errorMessage: string;
  speciality: SpecialityModel;
  specialities: SpecialityModel[];
  formsOfEducation: FormOfEducation[];
  languagesLearning: LanguageLearning[];

  constructor(private specialityService: SpecialityService) {
    this.speciality = new SpecialityModel();
    this.formsOfEducation = [];
    this.languagesLearning = [];
  }

  ngOnInit() {
    this.initFormOfEducation();
    this.initLanguageLearning();
  }

  initLanguageLearning() {
    this.languagesLearning.push(new LanguageLearning(1, "Русский"));
    this.languagesLearning.push(new LanguageLearning(2, "Английский"));
  }

  initFormOfEducation() {
    this.formsOfEducation.push(new FormOfEducation(1, "Очная"));
    this.formsOfEducation.push(new FormOfEducation(2, "Заочная"));
    this.formsOfEducation.push(new FormOfEducation(3, "Дистанционная"));
  }

  initSpecialities() {
    this.specialityService.getAll()
      .subscribe(
      specialities => {
        this.specialities = specialities;
      },
      error => this.errorMessage = <any>error
      );
  }
}
