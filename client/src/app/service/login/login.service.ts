import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Headers, Http } from '@angular/http';
import "rxjs/Rx";
import { LoginModel } from "../../model/login.model";
import {UserAction} from "../../actions/user.action";
import {Store} from "@ngrx/store";
import {UserState} from "../../reducers/user.reducer";
import {HeadersService} from "../headers.service";
import {UserModel} from "../../model/user.model";


@Injectable()
export class LoginService {

  private loginURL: string;
  private logoutURL: string;
  private getUserUrl: string;
  private tokenName: string;

  constructor(private http: Http,
              private store: Store<UserState>) {
    this.getUserUrl = "http://localhost:8080/api/getCurrentUser";
    this.loginURL = "http://localhost:8080/api/login";
    this.logoutURL = "http://localhost:8080/api/logout";
    this.tokenName = 'x-auth-token';
  }

  login(loginModel: LoginModel): Observable<any> {
    return this.http
      .post(this.loginURL, JSON.stringify(loginModel), { headers: HeadersService.prepareHeaders() })
      .do(resp => {
        console.log(resp.headers.get(this.tokenName));
        let date = new Date().getTime();
        let currentToken = resp.headers.get(this.tokenName);
        localStorage.setItem(this.tokenName, currentToken);
        localStorage.setItem(currentToken, date.toString());
        this.store.dispatch({ type: UserAction.LOGIN });
      });
  }

  logout(): Observable<any>{
    return this.http.get(this.logoutURL, {headers: HeadersService.prepareHeaders()})
      .do(res => {
        let token = localStorage.getItem(this.tokenName);
        localStorage.removeItem(this.tokenName);
        localStorage.removeItem(token);
        this.store.dispatch({ type: UserAction.LOGOUT });
      });
  }

  getCurrentUser(): Observable<UserModel> {
    return this.http.get(this.getUserUrl, { headers: HeadersService.prepareHeaders() })
      .map(LoginService.extractData)
      .catch(LoginService.handleError);
  }

  private static extractData(res: Response) {
    return res.json();
  }

  private static handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
