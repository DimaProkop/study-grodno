/**
 * Created by DENIS on 12.04.2017.
 */

import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Headers, Http } from '@angular/http';
import "rxjs/Rx";


@Injectable()
export class LevelOfEducationService {

  private levelOfEducationURL: string;

  constructor(private http: Http) {
    this.levelOfEducationURL = "http://localhost:8080/level";
  }

  prepareHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-auth-token', localStorage.getItem('x-auth-token'));
    return headers;
  }

  getAll(): Observable<any[]> {
    return this.http.get(this.levelOfEducationURL, { headers: this.prepareHeaders() })
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.json();
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
