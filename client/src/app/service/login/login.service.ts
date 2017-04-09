import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Headers, Http } from '@angular/http';
import "rxjs/Rx";
import { LoginModel } from "../../model/login.model";


@Injectable()
export class LoginService {

  private loginURL: string;

  private headers = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(private http: Http) {
    this.loginURL = "http://localhost:8080/api/login";
  }

  login(loginModel: LoginModel): Observable<any> {
    return this.http
      .post(this.loginURL, JSON.stringify(loginModel), { headers: this.headers })
      .do(resp => {
        console.log(resp.headers.get('x-auth-token'));
        localStorage.setItem('x-auth-token', resp.headers.get('x-auth-token'));
      });
  }

  private static extractData(res: Response) {
    return res.json();
  }

  private static handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
