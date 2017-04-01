/**
 * Created by DENIS on 26.03.2017.
 */
import {Component, OnInit } from '@angular/core';
import {UniversityService} from "../../service/university/university.service";
import {UniversityModel} from "../../model/university.model";

@Component({
  selector: 'app-university-builder',
  templateUrl: 'university-builder.component.html',
  styleUrls: ['university-builder.component.css'],
})
export class UniversityBuilderComponent implements OnInit {

  errorMessage: string;
  university: UniversityModel;
  universities: UniversityModel[];

  constructor(private universityService: UniversityService) {
    this.university = new UniversityModel();
    this.universities = [];
  }
  ngOnInit() {

  }

  save(): void {

    this.universityService.create(this.university)
      .subscribe(
        university => {

          this.university = university;
          this.universities.push(this.university);

        },
        error => this.errorMessage = <any>error
      );
  }

}
