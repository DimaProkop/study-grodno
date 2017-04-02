import { Injectable } from '@angular/core';
import {Response, URLSearchParams, Http, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {FacultyModel} from "../../model/faculty.model";


@Injectable()
export class FacultyService {

  private facultyURL : string;
  private getDep : string;

  constructor(private http: Http) {
    this.facultyURL = "http://localhost:8080/api/faculty";
  }

  prepareHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-auth-token', localStorage.getItem('x-auth-token'));
    return headers;
  }

  create(faculty: any): Observable<any> {
    return this.http
      .post(this.facultyURL, JSON.stringify(faculty), {headers: this.prepareHeaders()})
      .map(this.extractData)
      .catch(this.handleError);
  }

  getAll(): Observable<any[]> {
    return this.http.get(this.facultyURL, {headers: this.prepareHeaders()})
      .map(this.extractData)
      .catch(this.handleError);
  }

  getFacultyById(id: number): Observable<any> {
    let params = new URLSearchParams();
    params.set('id', "" + id);
    return this.http.get(this.facultyURL, {search: params, headers: this.prepareHeaders()})
      .map(this.extractData)
      .catch(this.handleError);
  }

  getDepartment(id: number): Observable<any> {
    this.getDep = "http://localhost:8080/faculty/get";
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
