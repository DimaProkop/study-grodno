/**
 * Created by DENIS on 26.03.2017.
 */
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FacultyModel} from "../../model/faculty.model";
import {FacultyService} from "../../service/faculty/faculty.service";
import {SpecialityService} from "../../service/speciality/speciality.service";
import {SpecialityModel} from "../../model/speciality.model";
import {NewsModel} from "../../model/news.model";
import {NewsService} from "../../service/news/news.service";
import {EducationInstitutionService} from "../../service/education-institution/education-institution.service";
import {EducationInstitutionModel} from "../../model/education-institution.model";

@Component({
  selector: 'app-news-builder',
  templateUrl: 'news-builder.component.html',
  styleUrls: ['news-builder.component.css'],
})
export class NewsBuilderComponent implements OnInit {

  currentNews: NewsModel;
  news: NewsModel[];
  institutions: EducationInstitutionModel[];

  constructor(private newsService: NewsService, private institutionService: EducationInstitutionService) {

  }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.currentNews = new NewsModel();
    this.news = [];
    this.institutions = [];

    this.newsService.getAll().subscribe(result => {
      this.news = result;
    });

    this.institutionService.getAll().subscribe(result => {
      this.institutions = result;
    });
  }

  save() {
    this.newsService.save(this.currentNews).subscribe(result => {
      this.newsService.getAll().subscribe(result => {
        this.news = result;
        this.currentNews = new NewsModel();
      });
    });

  }

  edit(id: number) {
    for (let i = 0; i < this.news.length; i++) {
      if (id == this.news[i].id) {
        this.currentNews = this.news[i];
        break;
      }
    }
  }

  onChange(item) {
    console.log(item);
    this.currentNews.educationInstitution = item;
    console.log(this.currentNews.educationInstitution);
  }
}
