import {Component, OnInit} from '@angular/core';
import {MailService} from "../../service/mail/mail.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageModel} from "../../model/message.model";
import {EducationInstitutionService} from "../../service/education-institution/education-institution.service";
import {EducationInstitutionModel} from "../../model/education-institution.model";

@Component({
  selector: 'app-mail-detail',
  templateUrl: './mail-detail.component.html',
  styleUrls: ['./mail-detail.component.css'],
  providers: [MailService]
})
export class MailDetailComponent implements OnInit {

  private message: MessageModel;
  public an: boolean;
  public header: string;
  public text: string;
  public size: number;
  public institutions: EducationInstitutionModel[];
  private education: EducationInstitutionModel;

  constructor(private route: ActivatedRoute,
              private mailService: MailService,
              private educationService: EducationInstitutionService,
              private router: Router) {
  }

  ngOnInit() {
    this.size = 12;
    this.an = false;
    this.route
      .params
      .subscribe(param => {
        if (param['id'] != 0) {
          this.mailService.getById(+param['id'])
            .subscribe(x => {
              this.message = x;
            });
        }
      });
    this.educationService.getAll().subscribe(result => {
      this.institutions = result;
    });

  }

  ok() {
    this.size = 6;
    this.an = true;
  }

  select(item) {
    this.education = item;
  }

  answer() {
    let newMessage: MessageModel;
    newMessage = new MessageModel();
    if (!this.message) {
      newMessage.toId = this.education.user.login;
    } else {
      newMessage.toId = this.message.fromId;
    }
    newMessage.header = this.header;
    newMessage.text = this.text;
    this.mailService.sendMessage(newMessage).subscribe(x => {
    });
    this.router.navigate(['mail']);
  }

}
