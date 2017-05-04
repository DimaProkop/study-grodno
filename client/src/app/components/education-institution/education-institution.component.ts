import {Component, OnInit, ElementRef} from '@angular/core';
import {EducationInstitutionService} from "../../service/education-institution/education-institution.service";
import {ActivatedRoute, Router} from "@angular/router";
import {EducationInstitutionModel} from "../../model/education-institution.model";
import * as jQuery from 'jquery';
import {BookmarksService} from "../../service/bookmarks/bookmarks.service";
import {Bookmark} from "../../model/bookmark.model";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-education-institution',
  templateUrl: './education-institution.component.html',
  styleUrls: ['./education-institution.component.css'],
  providers: [BookmarksService]
})
export class EducationInstitutionComponent implements OnInit {

  public institutions: EducationInstitutionModel[];

  constructor(private educationInstitutionService: EducationInstitutionService,
              private router: Router,
              private element: ElementRef,
              private bookmarksService: BookmarksService,
              private store: Store<any>) { }

  ngOnInit() {
    jQuery(document).ready(function () {
      jQuery(this).scrollTop(0);
    });
    this.init();
  }

  init(): void {

    this.institutions = [];

      this.educationInstitutionService.getAll().subscribe(result => {
        console.log(result);
        this.institutions = result;
      });
  }

  getCountSpeciality(id: number): number {

    let countSpeciality = 0;

    for(let i = 0; i < this.institutions.length; i++) {
      if(this.institutions[i].id == id) {
        for(let j = 0; j < this.institutions[i].faculties.length; j++) {
          countSpeciality += this.institutions[i].faculties[j].specialities.length;
        }
      }
    }

    return countSpeciality;
  }

  addAndRemoveClassToFavorites(id) {
    if (jQuery(this.element.nativeElement).find('#' + id).hasClass('fa fa-bookmark-o')) {
      jQuery(this.element.nativeElement).find('#' + id).removeClass("fa fa-bookmark-o").addClass("fa fa-bookmark");
      this.bookmarksService.addBookmark(new Bookmark(2, id)).subscribe(res => {
      });
    } else {
      jQuery(this.element.nativeElement).find('#' + id).removeClass("fa fa-bookmark").addClass("fa fa-bookmark-o");
      this.bookmarksService.deleteBookmark(new Bookmark(2, id)).subscribe(res => {
      });
    }
  }

  goDetail(id: number): void {
    this.router.navigate(['institution/', id]);
  }

}
