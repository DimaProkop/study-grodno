import { Component, OnInit } from '@angular/core';
import {SpecialityModel} from "../../model/speciality.model";

interface AppState {
  specialities: SpecialityModel[];
}

@Component({
  selector: 'app-speciality',
  templateUrl: './speciality.component.html',
  styleUrls: ['./speciality.component.css']
})

export class SpecialityComponent implements OnInit {

  private specialities: SpecialityModel[];

  constructor() {
  }

  ngOnInit() {

  }

}

