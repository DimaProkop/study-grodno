import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {Response, URLSearchParams} from "@angular/http";
import { Headers, Http } from '@angular/http';
import "rxjs/Rx";
import {TagModel} from "../../model/tag.model";
import {UniversityModel} from "../../model/university.model";


@Injectable()
export class UniversityService {

  private getUnivUrl : string;

  constructor(private http: Http) {
    this.getUnivUrl = "http://localhost:8080/univ";
  }

  prepareHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-auth-token', localStorage.getItem('x-auth-token'));
    return headers;
  }

  create(university: any): Observable<any> {
    return this.http
      .post(this.getUnivUrl, JSON.stringify(university), {headers: this.prepareHeaders()})
      .map(this.extractData)
      .catch(this.handleError);
  }

  getAll(): Observable<any[]> {
    return this.http.get(this.getUnivUrl, {headers: this.prepareHeaders()})
      .map(this.extractData)
      .catch(this.handleError);
  }

  getUniversityById(id: number): Observable<UniversityModel> {
    let params = new URLSearchParams();
    params.set('id', "" + id);
    return this.http.get(this.getUnivUrl, {search: params, headers: this.prepareHeaders()})
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
