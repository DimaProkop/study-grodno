import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Headers, Response, Http, URLSearchParams} from "@angular/http";
import {LevelOfEducation} from "../../model/level-of-education.model";
import {Direction} from "../../model/direction.model";
import {SearchModel} from "../../model/search.model";
import {SpecialityModel} from "../../model/speciality.model";
import {EducationInstitutionModel} from "../../model/education-institution.model";
import {isNullOrUndefined} from "util";
import {isNumber} from "util";

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
    return this.http.get(this.url + "/levels", {headers: this.prepareHeaders()})
      .map(this.extractData)
      .catch(this.handleError);
  }

  getDirections(): Observable<Direction[]> {
    return this.http.get(this.url + "/directions", {headers: this.prepareHeaders()})
      .map(this.extractData)
      .catch(this.handleError);
  }

  getForms(): Observable<Direction[]> {
    return this.http.get(this.url + "/forms", {headers: this.prepareHeaders()})
      .map(this.extractData)
      .catch(this.handleError);
  }

  findSpecialityByParams(params: SearchModel): Observable<SpecialityModel[]> {

    let duration = isNullOrUndefined(params.duration) || !isNumber(+params.duration) || ((+params.duration) <= 0) ? -1 : (+params.duration);

    console.log(duration);

    return this.http
      .get(this.url + "/params=" + params.direction + "&" + params.level + "&" + params.form + "&" + duration, {headers: this.prepareHeaders()})
      .map(this.extractData)
      .catch(this.handleError);
  }

  getInsitutionBySpeciality(id: number): Observable<EducationInstitutionModel> {
    let params = new URLSearchParams();
    params.set('id', "" + id);
    return this.http.get(this.url + "/institution-by-speciality/" + id, {headers: this.prepareHeaders()})
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(response: Response) {
    return response.json();
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
