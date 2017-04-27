import {Component, OnInit} from '@angular/core';
import {PersonInfoModel} from "../../model/person-info.model";
import {IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts} from 'angular-2-dropdown-multiselect';
import {DirectionService} from "../../service/direction/direction.service";
import {Direction} from "../../model/direction.model";
import {LevelOfEducationService} from "../../service/level-of-education/level-of-education.service";
import {LevelOfEducation} from "../../model/level-of-education.model";
import {RequestService} from "../../service/request/request.service";
import {CountriesMock} from "../../model/countries-mock.model";
import {EducationInstitutionService} from "../../service/education-institution/education-institution.service";
import {EducationInstitutionModel} from "../../model/education-institution.model";

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

  educationInstitutionOptions: IMultiSelectOption[];
  educationInstitutionModel: number[];
  personInfo: PersonInfoModel = new PersonInfoModel();
  directions: Direction[];
  currentLevelsOfEducation: string[];
  levelsOfEducationDesired: LevelOfEducation[];
  russianLanguageLevels: string[];
  englishLanguageLevels: string[];
  certificatesInRussian: string[];
  certificatesInEnglish: string[];
  countries: CountriesMock;
  institutions: EducationInstitutionModel[] = [];

  constructor(private directionService: DirectionService, private levelOfEducationService: LevelOfEducationService,
              private requestService: RequestService, private institutionService: EducationInstitutionService) {
    this.personInfo = new PersonInfoModel();
  }

  ngOnInit() {
    this.educationInstitutionOptions = [];
    this.educationInstitutionModel = [];

    this.loadData();
  }

  onChangeDirection(item) {
      this.personInfo.selectedDirection = item;

    this.institutionService.getUniversitiesByDirectionId(item.id)
      .subscribe(
        items => {
          this.institutions = items;
          for (let i = 0; i < items.length; i++) {
            this.educationInstitutionOptions.push({
              id: items[i].id,
              name: items[i].name
            })
          }
        }
      );
  }

  onChangeLevel(item) {
    this.personInfo.levelOfEducationDesired = item;
  }

  onChange(item) {
  }

  loadData() {
    this.initCertificatesInRussian();
    this.initDirection();
    this.initLevelsOfEducation();
    this.initCurrentLevelOfEducation();
    this.initRussianLanguageLevel();
    this.initEnglishLanguageLevel();
    this.initCertificatesInEnglish();
    this.countries = new CountriesMock();
  }

  initDirection(): void {

    this.directions = [];

    this.directionService.getAll()
      .subscribe(
        items => {
          console.log(items);
          this.directions = items;
          console.log(this.directions);
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

    this.currentLevelsOfEducation = [];

    this.levelOfEducationService.getAll()
      .subscribe(
        items => {
          for (let i = 0; i < items.length; i++) {
            this.currentLevelsOfEducation.push(items[i].name);
          }

          this.currentLevelsOfEducation.push("Средняя школа");
          this.currentLevelsOfEducation.push("Колледж");
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

  send(flag) {

    this.setInstitution();

    this.requestService.send(this.personInfo, flag)
      .subscribe(
        item => {
          this.personInfo.id = item.id;
        }
      );
  }

  setInstitution() {

    this.personInfo.selectedEducationInstitution = [];

    for(let i = 0; i < this.institutions.length; i++) {
      for(let j = 0; j < this.educationInstitutionModel.length; j++) {
        if(this.institutions[i].id == this.educationInstitutionModel[j]) {
          this.personInfo.selectedEducationInstitution.push(this.institutions[i]);
        }
      }
    }
  }
}
