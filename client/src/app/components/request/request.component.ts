import {Component, OnInit} from '@angular/core';
import {PersonInfoModel} from "../../model/person-info.model";
import {IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts} from 'angular-2-dropdown-multiselect';
import {DirectionService} from "../../service/direction/direction.service";
import {Direction} from "../../model/direction.model";
import {LevelOfEducationService} from "../../service/level-of-education/level-of-education.service";
import {LevelOfEducation} from "../../model/level-of-education.model";
import {RequestService} from "../../service/request/request.service";

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  settings: IMultiSelectSettings = {
    pullRight: false,
    enableSearch: true,
    checkedStyle: 'checkboxes',
    buttonClasses: 'form-control required',
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

  educationInstitutionOptions: IMultiSelectOption[] = [];
  educationInstitutionModel: number[] = [];
  personInfo: PersonInfoModel = new PersonInfoModel();
  directions: Direction[] = [];
  currentLevelOfEducation: string[];
  levelsOfEducationDesired: LevelOfEducation[];
  russianLanguageLevels: string[];
  englishLanguageLevels: string[];
  certificatesInRussian: string[];
  certificatesInEnglish: string[];


  constructor(private directionService: DirectionService, private levelOfEducationService: LevelOfEducationService,
              private requestService: RequestService) {
  }

  ngOnInit() {
    this.educationInstitutionOptions = [];
    this.educationInstitutionModel = [];
    this.personInfo = new PersonInfoModel();
    this.initRussianLanguageLevel();
    this.initEnglishLanguageLevel();
    this.initCertificatesInRussian();
    this.initCertificatesInEnglish();
    this.initDirection();
    this.initCurrentLevelOfEducation();
    this.initLevelsOfEducation();
  }

  onChange(event) {
  }

  initDirection(): void {

    this.directions = [];

    this.directionService.getAll()
      .subscribe(
        items => {
          this.directions = items;
        }
      );
  }

  initLevelsOfEducation(): void {

    this.levelsOfEducationDesired = [];

    this.levelOfEducationService.getAll()
      .subscribe(
        items => {
          this.levelsOfEducationDesired = items;
        }
      );
  }

  initCurrentLevelOfEducation(): void {

    this.currentLevelOfEducation = [];

    this.levelOfEducationService.getAll()
      .subscribe(
        items => {
          for (let i = 0; i < items.length; i++) {
            this.currentLevelOfEducation.push(items[i].name);
          }

          this.currentLevelOfEducation.push("Средняя школа");
          this.currentLevelOfEducation.push("Колледж");
        }
      );
  }

  initRussianLanguageLevel(): void {

    this.russianLanguageLevels = [];

    this.russianLanguageLevels.push("Не владею");
    this.russianLanguageLevels.push("Элементарный");
    this.russianLanguageLevels.push("Базовый");
    this.russianLanguageLevels.push("Средний");
    this.russianLanguageLevels.push("Свободный");
  }

  initEnglishLanguageLevel(): void {

    this.englishLanguageLevels = [];

    this.englishLanguageLevels.push("Не владею");
    this.englishLanguageLevels.push("A1 - Beginner");
    this.englishLanguageLevels.push("A2 - Elementary");
    this.englishLanguageLevels.push("B1 - Intermediate");
    this.englishLanguageLevels.push("B2 - Upper intermediate");
    this.englishLanguageLevels.push("C1 - Advanced");
    this.englishLanguageLevels.push("C2 - Proficiency");
  }

  initCertificatesInRussian(): void {
    this.certificatesInRussian = [];

    this.certificatesInRussian.push("(Не указано)");
    this.certificatesInRussian.push("ТЭУ");
    this.certificatesInRussian.push("ТБУ");
    this.certificatesInRussian.push("ТРКИ - 1");
    this.certificatesInRussian.push("ТРКИ - 2");
    this.certificatesInRussian.push("ТРКИ - 3");
    this.certificatesInRussian.push("ТРКИ - 4");
  }

  initCertificatesInEnglish(): void {
    this.certificatesInEnglish = [];

    this.certificatesInEnglish.push("(Не указано)");
    this.certificatesInEnglish.push("FCE");
    this.certificatesInEnglish.push("IELTS");
    this.certificatesInEnglish.push("TOEFL");
    this.certificatesInEnglish.push("CAE");
    this.certificatesInEnglish.push("CPE");
  }

  save() {
    this.requestService.create(this.personInfo)
      .subscribe(
        item => {
          console.log(this.personInfo);
          this.personInfo = item;
        }
      );
  }
}
