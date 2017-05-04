import {Component, OnInit} from '@angular/core';
import * as jQuery from 'jquery';
import {SpecialityModel} from "../../model/speciality.model";
import {BookmarksService} from "../../service/bookmarks/bookmarks.service";
import {EducationInstitutionModel} from "../../model/education-institution.model";
import {Router} from "@angular/router";
import {isNullOrUndefined} from "util";
import {Store} from "@ngrx/store";
import {UserState, LOGOUT} from "../../reducers/user.reducer";
import {UserAction} from "../../actions/user.action";

@Component({
  selector: 'app-favourites',
  templateUrl: 'bookmarks.component.html',
  styleUrls: ['bookmarks.component.css'],
  providers: [BookmarksService]
})
export class BookmarksComponent implements OnInit {

  public specialities: SpecialityModel[];
  public institutions: EducationInstitutionModel[];
  public institution: any[];


  constructor(private bookmarkService: BookmarksService,
              private router: Router, private store: Store<UserState>) {
  }

  ngOnInit() {
    this.init();
  }

  init() {
    this.showTab('1');
    this.specialities = [];
    this.institutions = [];
    this.showTab("1");
  }

  showTab(tab_id: string) {

    let tab: string;
    tab = "tab-" + tab_id;
    jQuery('ul.tabs li').removeClass('current');
    jQuery('.tab-content').removeClass('current');

    jQuery('#tabs-' + tab).addClass('current');
    jQuery("#" + tab).addClass('current');

    if (tab_id == "1") {
      this.bookmarkService.getByChoice(1).subscribe(
        result => {
          this.specialities = result;
        });
    } else if (tab_id == "2") {
      this.bookmarkService.getByChoice(2).subscribe(
        result => {
          this.institutions = result;
        }
      )
    }
  }

  goDetail(id) {
    this.router.navigate(['speciality/', id]);
  }

  goDetailInstitution(id) {
    this.router.navigate(['institution/', id]);
  }

  getInstitution(id) {

    if (isNullOrUndefined(this.institution)) {
      this.institution = [];
    }

    let temp;

    for (let i = 0; i < this.institution.length; i++) {
      if (this.institution[i].id == id) {
        temp = this.institution[i].object;
        break;
      }
    }

    return temp;
  }
}
