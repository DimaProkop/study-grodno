import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-favourites',
  templateUrl: 'bookmarks.component.html',
  styleUrls: ['bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showTab() {
    jQuery(".nav-tabs a").tab('show');
  }

}
