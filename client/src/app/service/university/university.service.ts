import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {Response, URLSearchParams} from "@angular/http";
import { Headers, Http } from '@angular/http';
import "rxjs/Rx";
import {TagModel} from "../../model/tag.model";
import {UniversityModel} from "../../model/university.model";


@Injectable()
export class UniversityService {

  private universityURL : string;

  constructor(private http: Http) {
    this.universityURL = "http://localhost:8080/api/university";
  }

  prepareHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-auth-token', localStorage.getItem('x-auth-token'));
    return headers;
  }

  create(university: any): Observable<any> {
    return this.http
      .post(this.universityURL, JSON.stringify(university), {headers: this.prepareHeaders()})
      .map(this.extractData)
      .catch(this.handleError);
  }

  getAll(): Observable<any[]> {
    return this.http.get(this.universityURL, {headers: this.prepareHeaders()})
      .map(this.extractData)
      .catch(this.handleError);
  }

  getUniversityById(id: number): Observable<any> {
    let params = new URLSearchParams();
    params.set('id', "" + id);
    return this.http.get(this.universityURL + "/findById", {search: params, headers: this.prepareHeaders()})
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    console.log(res.json());
    return res.json();
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}