import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../service/home.service";
import {Message} from "../../model/message";
import {toPromise} from "rxjs/operator/toPromise";

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  private message: Message;

  constructor(private helloService: HomeService) {
    this.message = new Message();
  }

  ngOnInit() {
    this.helloService.getMsg()
      .subscribe(
        message => {
          this.message = message;
          console.log(message);
        }
      )
  }

}
