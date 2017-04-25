/**
 * Created by DENIS on 25.04.2017.
 */
import { Observable } from "rxjs/Observable";
import {Injectable, EventEmitter} from "@angular/core";
import { Response } from "@angular/http";
import { Headers, Http } from '@angular/http';
import "rxjs/Rx";
import { SpecialityModel } from "../../model/speciality.model";
import {PersonInfoModel} from "../../model/person-info.model";


@Injectable()
export class RequestService {

  private requestURL: string;

  prepareHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-auth-token', localStorage.getItem('x-auth-token'));
    return headers;
  }

  constructor(private http: Http) {
    this.requestURL = "http://localhost:8080/request";
  }

  create(personInfo: PersonInfoModel): Observable<PersonInfoModel> {
    return this.http
      .post(this.requestURL, JSON.stringify(personInfo), { headers: this.prepareHeaders() })
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.json();
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

