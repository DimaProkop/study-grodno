/**
 * Created by DENIS on 26.03.2017.
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SpecialityModel } from "../../model/speciality.model";
import { isNullOrUndefined } from "util";
import { SpecialityService } from "../../service/speciality/speciality.service";
import { LanguageLearning } from "../../model/language-learning.model";
import { FormOfEducation } from "../../model/form-of-education.model";
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';

@Component({
  selector: 'app-speciality-builder',
  templateUrl: 'speciality-builder.component.html',
  styleUrls: ['speciality-builder.component.css']
})
export class SpecialityBuilderComponent implements OnInit {

  settings: IMultiSelectSettings = {
    pullRight: true,
    enableSearch: true,
    checkedStyle: 'checkboxes',
    buttonClasses: 'form-control',
    selectionLimit: 0,
    closeOnSelect: false,
    autoUnselect: false,
    showCheckAll: false,
    showUncheckAll: false,
    fixedTitle: false,
    dynamicTitleMaxItems: 10,
  };

  texts: IMultiSelectTexts = {
    checkAll: 'Check all',
    uncheckAll: 'Uncheck all',
    checked: 'checked',
    checkedPlural: 'checked',
    searchPlaceholder: 'Поиск...',
    defaultTitle: 'Выберите значение',
    allSelected: 'All selected',
  };

  @Input()
  formType: number;

  @Input()
  entity: SpecialityModel;
  @Output() onChanged = new EventEmitter<SpecialityModel>();
  save() {
    this.onChanged.emit(this.entity);
  }

  levelsOfEducationModel: number[] = [];
  directionModel: number[] = [];

  formOfEducationOptions: IMultiSelectOption[] = [];
  languagesLearningOptions: IMultiSelectOption[] = [];
  levelOfEducationOptions: IMultiSelectOption[] = [];
  directionOptions: IMultiSelectOption[] = [];

  formsOfEducation: FormOfEducation[];
  languagesLearning: LanguageLearning[];

  constructor(private specialityService: SpecialityService) {
    this.entity = new SpecialityModel();
    this.formsOfEducation = [];
    this.languagesLearning = [];
    this.entity.formsOfEducation = [];
    this.entity.languagesLearning = [];
  }

  ngOnInit() {

    this.initFormOfEducation();
    this.initLanguageLearning();
  }
  onChange() {
    console.log(this.entity.formsOfEducation);
    console.log(this.entity.languagesLearning);
  }

  initLanguageLearning() {

    this.languagesLearning.push(new LanguageLearning(1, "Русский"));
    this.languagesLearning.push(new LanguageLearning(2, "Английский"));

    for(let i = 0; i < this.languagesLearning.length; i++) {
      this.languagesLearningOptions.push({
        id: this.languagesLearning[i].id,
        name: this.languagesLearning[i].name
      })
    }
  }

  initFormOfEducation() {
    this.formsOfEducation.push(new FormOfEducation(1, "Очная"));
    this.formsOfEducation.push(new FormOfEducation(2, "Заочная"));
    this.formsOfEducation.push(new FormOfEducation(3, "Дистанционная"));

    for(let i = 0; i < this.formsOfEducation.length; i++) {
      this.formOfEducationOptions.push({
        id: this.formsOfEducation[i].id,
        name: this.formsOfEducation[i].name
      })
    }
  }
}
