import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {EducationInstitutionService} from "../../service/education-institution/education-institution.service";
import {EducationInstitutionModel} from "../../model/education-institution.model";
/**
 * Created by DENIS on 01.05.2017.
 */
@Component({
  selector: 'app-education-institution-detail',
  templateUrl: './education-institution-detail.component.html',
  styleUrls: ['./education-institution-detail.component.css']
})
export class EducationInstitutionDetailComponent implements OnInit {

  institution: EducationInstitutionModel;

  constructor(private route: ActivatedRoute,
              private router: Router, private institutionService: EducationInstitutionService) {
  }

  ngOnInit() {
    this.init();
  }

  init() {

    this.institution = new EducationInstitutionModel();

    this.route
      .params
      .subscribe(param => {
        this.institutionService.getById(+param["id"]).subscribe(institution => {
          this.institution = institution;
        });
      });
  }
}
