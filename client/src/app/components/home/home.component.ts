import {Component, OnInit, ElementRef} from "@angular/core";
import {Router} from "@angular/router";


@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

  goToNews(id: number) {
      this.router.navigate(['news', id]);
  }
}
