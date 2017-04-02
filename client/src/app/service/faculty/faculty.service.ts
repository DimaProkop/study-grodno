import { Injectable } from '@angular/core';
import {Response, URLSearchParams, Http, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {FacultyModel} from "../../model/faculty.model";


@Injectable()
export class FacultyService {

  private getFacultyUrl : string;
  private getDep : string;

  constructor(private http: Http) {
    this.getFacultyUrl = "http://localhost:8080/faculty";
  }

  prepareHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-auth-token', localStorage.getItem('x-auth-token'));
    return headers;
  }

  getFacultyById(id: number): Observable<any> {
    let params = new URLSearchParams();
    params.set('id', "" + id);
    return this.http.get(this.getFacultyUrl, {search: params, headers: this.prepareHeaders()})
      .map(this.extractData)
      .catch(this.handleError);
  }

  getDepartment(id: number): Observable<any> {
    this.getDep = "http://localhost:8080/faculty";
    let params = new URLSearchParams();
    params.set('id', "" + id);
    return this.http.get(this.getDep, {search: params, headers: this.prepareHeaders()})
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
