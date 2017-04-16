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
export class SpecialityBuilderComponent {

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

  isEdit: boolean = false;

  @Input()
  formType: number;

  @Input()
  entity: SpecialityModel = new SpecialityModel();
  @Output() onChanged = new EventEmitter<SpecialityModel>();

  save() {
    this.setModel();
    this.isEdit = false;
    this.onChanged.emit(this.entity);
  }

  formOfEducationOptions: IMultiSelectOption[] = [];
  languagesLearningOptions: IMultiSelectOption[] = [];
  levelOfEducationOptions: IMultiSelectOption[] = [];
  directionOptions: IMultiSelectOption[] = [];

  formsOfEducation: FormOfEducation[] = [];
  languagesLearning: LanguageLearning[] = [];
  directions: Direction[] = [];
  levelsOfEducation: LevelOfEducation[] = [];

  formsOfEducationModel: number[] = [];
  languagesLearningModel: number[] = [];
  directionsModel: number[] = [];
  levelsOfEducationModel: number[] = [];

  errorMessage: string;

  constructor(private formOfEducationService: FormOfEducationService, private languagesLearningService: LanguageLearningService,
              private levelOfEducationService: LevelOfEducationService, private directionService: DirectionService) {
  }

  ngOnChanges(){
    if (this.formType == 3) {
      this.isEdit = false;
      this.initDirection();
      this.initLevelOfEducation();
      this.initFormOfEducation();
      this.initLanguageLearning();

      this.languagesLearningModel = this.setModelOption(this.entity.languagesLearning);
      this.formsOfEducationModel = this.setModelOption(this.entity.formsOfEducation);
      this.directionsModel = this.setModelOption(this.entity.directions);
      this.levelsOfEducationModel = this.setModelOption(this.entity.levelsOfEducation);
    }
  }

  onEdit() {
    this.isEdit = true;
  }

  onChange(event) {
  }

  initLanguageLearning() {

    this.languagesLearningOptions = [];

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

    this.formOfEducationOptions = [];

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

    this.directionOptions = [];

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

    this.levelOfEducationOptions = [];

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

  setModelOption(items: any[]) {

    let options = [];

    if(isNullOrUndefined(items)) {
      items = [];
    }

    for(let i = 0; i < items.length; i++) {
      options.push(items[i].id);
    }

    return options;
  }

  setModel() {

    let temp = [];

    for(let i = 0; i < this.formsOfEducationModel.length; i++) {
      for(let j = 0; j < this.formsOfEducation.length; j++) {
          if(this.formsOfEducationModel[i] == this.formsOfEducation[j].id) {
            temp.push(this.formsOfEducation[j]);
            break;
          }
      }
    }

    this.entity.formsOfEducation = temp;
    temp = [];

    for(let i = 0; i < this.levelsOfEducationModel.length; i++) {
      for(let j = 0; j < this.levelsOfEducation.length; j++) {
        if(this.levelsOfEducationModel[i] == this.levelsOfEducation[j].id) {
          temp.push(this.levelsOfEducation[j]);
          break;
        }
      }
    }

    this.entity.levelsOfEducation = temp;
    temp = [];

    for(let i = 0; i < this.languagesLearningModel.length; i++) {
      for(let j = 0; j < this.languagesLearning.length; j++) {
        if(this.languagesLearningModel[i] == this.languagesLearning[j].id) {
          temp.push(this.languagesLearning[j]);
          break;
        }
      }
    }

    this.entity.languagesLearning = temp;
    temp = [];

    for(let i = 0; i < this.directionsModel.length; i++) {
      for(let j = 0; j < this.directions.length; j++) {
        if(this.directionsModel[i] == this.directions[j].id) {
          temp.push(this.directions[j]);
          break;
        }
      }
    }
    this.entity.directions = temp;
  }
}
