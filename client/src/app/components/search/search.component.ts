import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  vel: string;
  val: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.route
      .params
      .subscribe(params => {
        this.vel = params['level'];
        this.val = params['vector'];
      })
    console.log(this.vel, this.val);
  }
}
