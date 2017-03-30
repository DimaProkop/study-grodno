import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../service/home/home.service";
import {TagModel} from "../../model/tag.model";
import {Router} from "@angular/router";
import {SpecialityModel} from "../../model/speciality.model";
import {FacultyModel} from "../../model/faculty.model";
import {FacultyService} from "../../service/faculty/faculty.service";
import {UniversityService} from "../../service/university/university.service";
import {UniversityModel} from "../../model/university.model";

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  private tags: TagModel[];
  private selectedTags: TagModel[];
  private isSelected: boolean;
  private isExistFaculty: boolean;
  private selectedFaculty: FacultyModel;
  private isExistUniversity: boolean;
  private selectedUniversity: UniversityModel;
  private isNewSpec: boolean;

  private departments: FacultyModel[];

  private specialities: SpecialityModel[];

  constructor(private homeService: HomeService,
              private facultyService: FacultyService,
              private universityService: UniversityService,
              private router: Router) {
  }

  ngOnInit() {
    this.tags = [];
    this.selectedTags = [];
    this.isSelected = false;
    this.isExistFaculty = false;
    this.isExistUniversity = false;
    this.selectedFaculty = new FacultyModel();
    this.selectedUniversity = new UniversityModel();
    this.departments = [];
    this.isNewSpec = false;

    this.homeService.getTags()
      .subscribe(x => {
        this.tags = x;
      });
  }

  selectTag(tag: TagModel) {
    if (this.selectedTags.indexOf(tag) !== -1) {
      this.selectedTags.splice(this.selectedTags.indexOf(tag), 1);
    } else {
      this.selectedTags.push(tag);
    }
  }

  isExist(tag: TagModel) {
    return this.selectedTags.indexOf(tag) !== -1;
  }

  findTags() {
    this.homeService.sendTags(this.selectedTags).subscribe(x => {
      this.specialities = x;
    })
  }

  selectFaculty(id: number) {
    this.isExistFaculty = true;
    this.facultyService.getFacultyById(id).subscribe(x => {
      this.selectedFaculty = x;
    })
  }

  getUniversity(id: number) {
    this.isExistUniversity = true;
    this.universityService.getUniversityById(id).subscribe(x => {
      this.selectedUniversity = x;
      this.departments = x.departments;
    })
  }

  getDepartment(id: number) {
    this.isNewSpec = true;
    this.facultyService.getDepartment(id).subscribe(x => {
      this.specialities = x;
    })
  }
}
