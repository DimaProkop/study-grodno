/**
 * Created by DENIS on 02.05.2017.
 */
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import * as jQuery from "jquery";
import {NewsService} from "../../service/news/news.service";
import {NewsModel} from "../../model/news.model";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit {

  public news: NewsModel[];

  constructor(private newsService: NewsService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.init();
  }

  init() {
    this.news = [];

    this.route.parent.params.subscribe(param => {
      this.newsService.getNewsByInstitution(+param["id"]).subscribe(result => {
        this.news = result;
      });
    });
  }

  goDetail(id) {
    this.router.navigate(['news', id]);
  }
}



