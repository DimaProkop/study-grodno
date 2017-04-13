/**
 * Created by DENIS on 26.03.2017.
 */
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {SpecialityModel} from "../../model/speciality.model";
import {isNullOrUndefined} from "util";
import {SpecialityService} from "../../service/speciality/speciality.service";
import {LanguageLearning} from "../../model/language-learning.model";
import {FormOfEducation} from "../../model/form-of-education.model";
import {IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts} from 'angular-2-dropdown-multiselect';
import {FormOfEducationService} from "../../service/form-of-education/form-of-education";
import {LanguageLearningService} from "../../service/language-learning/language-learning.service";
import {LevelOfEducationService} from "../../service/level-of-education/level-of-education.service";
import {DirectionService} from "../../service/direction/direction.service";
import {Direction} from "../../model/direction.model";
import {LevelOfEducation} from "../../model/level-of-education.model";

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

  formOfEducationOptions: IMultiSelectOption[] = [];
  languagesLearningOptions: IMultiSelectOption[] = [];
  levelOfEducationOptions: IMultiSelectOption[] = [];
  directionOptions: IMultiSelectOption[] = [];

  formsOfEducation: FormOfEducation[];
  languagesLearning: LanguageLearning[];
  directions: Direction[];
  levelsOfEducation: LevelOfEducation[];

  errorMessage: string;

  constructor(private formOfEducationService: FormOfEducationService, private languagesLearningService: LanguageLearningService,
              private levelOfEducationService: LevelOfEducationService, private directionService: DirectionService) {
  }

  ngOnChanges(){
    console.log(this.entity);
    this.initDirection();
    this.initLevelOfEducation();
    this.initFormOfEducation();
    this.initLanguageLearning();
  }

  ngOnInit() {
  }

  onChange() {

  }

  initLanguageLearning() {

    this.languagesLearningService.getAll()
      .subscribe(
        items => {
          this.languagesLearning = items;

          for (let i = 0; i < this.languagesLearning.length; i++) {
            this.languagesLearningOptions.push({
              id: this.languagesLearning[i].id,
              name: this.languagesLearning[i].name
            })
          }
        },
        error => this.errorMessage = <any>error
      );
  }

  initFormOfEducation() {

    this.formOfEducationService.getAll()
      .subscribe(
        items => {
          this.formsOfEducation = items;

          for (let i = 0; i < this.formsOfEducation.length; i++) {
            this.formOfEducationOptions.push({
              id: this.formsOfEducation[i].id,
              name: this.formsOfEducation[i].name
            })
          }
        },
        error => this.errorMessage = <any>error
      );
  }

  initDirection() {

    this.directionService.getAll()
      .subscribe(
        items => {
          this.directions = items;

          for (let i = 0; i < this.directions.length; i++) {
            this.directionOptions.push({
              id: this.directions[i].id,
              name: this.directions[i].name
            })
          }
        },
        error => this.errorMessage = <any>error
      );
  }

  initLevelOfEducation() {

    this.levelOfEducationService.getAll()
      .subscribe(
        items => {
          this.levelsOfEducation = items;

          for (let i = 0; i < this.levelsOfEducation.length; i++) {
            this.levelOfEducationOptions.push({
              id: this.levelsOfEducation[i].id,
              name: this.levelsOfEducation[i].name
            })
          }
        },
        error => this.errorMessage = <any>error
      );
  }

  ngOnDestroy() {
    console.log("destr");
  }
}
