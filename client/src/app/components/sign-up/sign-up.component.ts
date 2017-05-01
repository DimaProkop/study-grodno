import { Component, OnInit } from '@angular/core';
import {SignUpModel} from "../../model/sign-up.model";
import {SignUpService} from "../../service/signup/sign-up.service";
import {Router} from "@angular/router";

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public login: string;
  public password: string;
  public repeatPassword: string;

  constructor(private signService: SignUpService,
              private router: Router) { }

  ngOnInit() {
  }

  save() {
    let user: SignUpModel;
    user = new SignUpModel(this.login, this.password, this.repeatPassword);
    console.log(user);
    this.signService.signUp(user).subscribe(x=> {});
    this.router.navigate(['/login']);
  }

}
