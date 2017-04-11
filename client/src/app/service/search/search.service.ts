import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Headers, Response, Http} from "@angular/http";
import {LevelOfEducation} from "../../model/level-of-education.model";
import {Direction} from "../../model/direction.model";
import {SearchModel} from "../../model/search.model";
import {SpecialityModel} from "../../model/speciality.model";

@Injectable()
export class SearchService {

  public url: string;

  constructor(private http: Http) {
    this.url = "http://localhost:8080/search";
  }

  prepareHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-auth-token', localStorage.getItem('x-auth-token'));
    return headers;
  }

  getLevels(): Observable<LevelOfEducation[]> {
    return this.http.get(this.url + "/getLevels", { headers: this.prepareHeaders() })
      .map(this.extractData)
      .catch(this.handleError);
  }

  getDirections(): Observable<Direction[]> {
    return this.http.get(this.url + "/getDirections", { headers: this.prepareHeaders() })
      .map(this.extractData)
      .catch(this.handleError);
  }

  getForms(): Observable<Direction[]> {
    return this.http.get(this.url + "/getForms", { headers: this.prepareHeaders() })
      .map(this.extractData)
      .catch(this.handleError);
  }

  findByParams(params: SearchModel): Observable<SpecialityModel[]> {
    return this.http
      .post(this.url + "/findByParams", JSON.stringify(params), { headers: this.prepareHeaders() })
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
