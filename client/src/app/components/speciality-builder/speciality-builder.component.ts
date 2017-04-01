/**
 * Created by DENIS on 26.03.2017.
 */
import {Component, OnInit} from '@angular/core';
import {SpecialityModel} from "../../model/speciality.model";
import {isNullOrUndefined} from "util";
import {SpecialityService} from "../../service/speciality/speciality.service";

@Component({
  selector: 'app-speciality-builder',
  templateUrl: 'speciality-builder.component.html',
  styleUrls: ['speciality-builder.component.css']
})
export class SpecialityBuilderComponent implements OnInit {

  errorMessage: string;
  speciality: SpecialityModel;
  specialities: SpecialityModel[];

  constructor(private specialityService: SpecialityService ) {
    this.speciality = new SpecialityModel();
  }

  ngOnInit() {

    this.specialityService.getAll()
      .subscribe(
        specialities => {
          this.specialities = specialities;
          console.log(this.specialities);
        },
        error => this.errorMessage = <any>error
      );
  }

  save(): void {

    console.log(this.speciality);

    this.specialityService.create(this.speciality)
      .subscribe(
        speciality => {

          this.speciality = speciality;
          this.specialities.push(this.speciality);

        },
        error => this.errorMessage = <any>error
      );
  }
}
