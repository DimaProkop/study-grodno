/**
 * Created by DENIS on 27.04.2017.
 */
import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {LevelOfEducation} from "../../model/level-of-education.model";
import {Direction} from "../../model/direction.model";
import {SearchService} from "../../service/search/search.service";
import {SearchModel} from "../../model/search.model";
import {isNullOrUndefined} from "util";

@Component({
  moduleId: module.id,
  selector: 'simple-search',
  templateUrl: 'simple-search.component.html',
  styleUrls: ['simple-search.component.css']
})
export class SimpleSearchComponent implements OnInit {

  public searchParams: SearchModel;
  public levels: LevelOfEducation[];
  public directions: Direction[];

  constructor(private router: Router, private route: ActivatedRoute, private searchService: SearchService) {

  }

  ngOnInit(): void {
    this.levels = [];
    this.directions = [];
    this.loadData();
    this.searchParams = new SearchModel();
    this.initParams();
  }

  initParams() {
    this.searchParams.level = !isNullOrUndefined(this.searchParams.level) ? this.searchParams.level : "";
    this.searchParams.direction = !isNullOrUndefined(this.searchParams.direction) ? this.searchParams.direction : "";
    this.searchParams.form = !isNullOrUndefined(this.searchParams.form) ? this.searchParams.form : "";
    this.searchParams.duration = !isNullOrUndefined(this.searchParams.duration) ? this.searchParams.duration : "";
  }

  search() {
    this.initParams();
    this.router.navigate(['speciality', {level: this.searchParams.level, direction: this.searchParams.direction}]);
  }

  /**
   * подргружает все нужны списки для формы
   */
  loadData() {
    this.searchService.getLevels()
      .subscribe(result => {
        this.levels = result;
      });

    this.searchService.getDirections()
      .subscribe(result => {
        this.directions = result;
      })
  }

}
