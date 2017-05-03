import { Component, OnInit } from '@angular/core';
import {MailService} from "../../service/mail/mail.service";
import * as jQuery from 'jquery';
import {MessageModel} from "../../model/message.model";
import {Router} from "@angular/router";

@Component({
  selector: 'mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css'],
  providers: [MailService]
})
export class MailComponent implements OnInit {

  private messages: MessageModel[];

  constructor(private mailService: MailService,
              private router: Router) { }

  ngOnInit() {
    this.messages = [];
    this.showTab('1');
  }

  showTab(tab_id: string) {
    //set tab for request
    if(tab_id == "1") {
      this.mailService.getMessages(true)
        .subscribe(x => {
          console.log(x);
          this.messages = x;
        });
    }else if(tab_id == "2") {
      this.mailService.getMessages(false)
        .subscribe(x => {
          this.messages = x;
        });
    }
    let tab: string;
    tab = "tab-" + tab_id;
    jQuery('ul.tabs li').removeClass('current');
    jQuery('.tab-content').removeClass('current');

    jQuery('#tabs-' + tab).addClass('current');
    jQuery("#" + tab).addClass('current');
  }

  newMessage() {
    this.router.navigate(['mail', 0]);
  }

  detail(id: number) {
    this.router.navigate(['mail', id]);
  }

}
