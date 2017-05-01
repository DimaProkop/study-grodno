import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";
import {SignUpModel} from "../../model/sign-up.model";
import {UserModel} from "../../model/user.model";
import {HeadersService} from "../headers.service";

@Injectable()
export class SignUpService {

  private signUpURL: string;

  constructor(private http: Http) {
    this.signUpURL = "http://localhost:8080/api/signUp";
  }

  signUp(signUpModel: SignUpModel): Observable<UserModel> {
    return this.http
      .post(this.signUpURL, JSON.stringify(signUpModel), {headers: HeadersService.prepareHeaders()})
      .map(SignUpService.extractData)
      .catch(SignUpService.handleError);
  }

  private static extractData(res: Response) {
    return res.json();
  }

  private static handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
