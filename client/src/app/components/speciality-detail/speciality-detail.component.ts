/**
 * Created by DENIS on 29.04.2017.
 */
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {SpecialityModel} from "../../model/speciality.model";
import {SpecialityService} from "../../service/speciality/speciality.service";
import {EducationInstitutionService} from "../../service/education-institution/education-institution.service";
import {SearchService} from "../../service/search/search.service";
import {EducationInstitutionModel} from "../../model/education-institution.model";
import {FacultyModel} from "../../model/faculty.model";
import {FacultyService} from "../../service/faculty/faculty.service";
import {Comment} from "../../model/comment.model";

@Component({
  selector: 'app-speciality-detail',
  templateUrl: './speciality-detail.component.html',
  styleUrls: ['./speciality-detail.component.css']
})

export class SpecialityDetailComponent implements OnInit {

  speciality: SpecialityModel;
  institution: EducationInstitutionModel;
  faculty: FacultyModel;
  public comments: Comment[];
  public text: string;

  constructor(private route: ActivatedRoute, private specialityService: SpecialityService,
              private searchService: SearchService, private facultyService: FacultyService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.initEntity();
  }

  initEntity() {
    this.comments = [];
    this.speciality = new SpecialityModel();
    this.institution = new EducationInstitutionModel();
    this.faculty = new FacultyModel();

    this.route
      .params
      .subscribe(param => {
        this.specialityService.getComments(+param["id"]).subscribe(res => {
          this.comments = res;
        });
        this.specialityService.getById(+param["id"]).subscribe(item => {
          this.speciality = item;
          this.searchService.getInsitutionBySpeciality(+param["id"]).subscribe(institution => {
            this.institution = institution;
          });
          this.facultyService.getFacultyBySpeciality(+param["id"]).subscribe(faculty => {
            this.faculty = faculty;
          });
        });
      });
  }

  goDetailInstitution(id: number) {
    this.router.navigate(['/institution/', id]);
  }

  goSpecialityInstitution(id: number) {
    this.router.navigate(['/institution/' + id + '/speciality']);
  }
/*
  addComment(id: number) {
    let comment: Comment;
    comment = new Comment();
    let date = new Date();
    comment.specialityId = id;
    comment.date = date.getDay().toLocaleString() + "-" + date.getMonth().toLocaleString() + "-" + date.getFullYear().toLocaleString();
    if (this.text == "") {
      this.text = "checking...";
    }
    comment.text = this.text;
    comment.username = "null";
    this.specialityService.addComment(comment).subscribe(res => {
    });
  }*/
}
