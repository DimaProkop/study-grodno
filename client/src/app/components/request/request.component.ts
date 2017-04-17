import { Component, OnInit } from '@angular/core';
import {PersonInfoModel} from "../../model/person-info.model";

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  personInfo: PersonInfoModel;

  constructor() { }

  ngOnInit() {
  }

}
