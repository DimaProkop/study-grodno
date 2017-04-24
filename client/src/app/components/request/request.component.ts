import { Component, OnInit } from '@angular/core';
import {PersonInfoModel} from "../../model/person-info.model";
import {IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts} from 'angular-2-dropdown-multiselect';

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
  personInfo: PersonInfoModel;

  constructor() { }

  ngOnInit() {
    this.educationInstitutionOptions = [];
    this.educationInstitutionModel = [];
    this.personInfo = new PersonInfoModel();
  }

  onChange(event) {
  }

}
