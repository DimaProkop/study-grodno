import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { Response, URLSearchParams } from "@angular/http";
import { Headers, Http } from '@angular/http';
import "rxjs/Rx";
import { EducationInstitutionModel } from "../../model/education-institution.model";


@Injectable()
export class EducationInstitutionService {

  private educationInstitutionURL: string;

  constructor(private http: Http) {
    this.educationInstitutionURL = "http://localhost:8080/education";
  }

  prepareHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-auth-token', localStorage.getItem('x-auth-token'));
    return headers;
  }

  create(university: EducationInstitutionModel): Observable<EducationInstitutionModel> {
      console.log(university);
    return this.http
      .post(this.educationInstitutionURL, JSON.stringify(university), { headers: this.prepareHeaders() })
      .map(this.extractData)
      .catch(this.handleError);
  }

  update(university: EducationInstitutionModel): Observable<EducationInstitutionModel> {
    console.log(university);
    return this.http
      .put(this.educationInstitutionURL, JSON.stringify(university), { headers: this.prepareHeaders() })
      .map(this.extractData)
      .catch(this.handleError);
  }

  getAll(): Observable<EducationInstitutionModel[]> {
    return this.http.get(this.educationInstitutionURL, { headers: this.prepareHeaders() })
      .map(this.extractData)
      .catch(this.handleError);
  }

  getById(id: number): Observable<EducationInstitutionModel> {
    return this.http.get(this.educationInstitutionURL + "/" + id, { headers: this.prepareHeaders() })
      .map(this.extractData)
      .catch(this.handleError);
  }

  getUniversitiesByDirectionId(id: number) {
    return this.http.get(this.educationInstitutionURL + "/direction=" + id, {headers: this.prepareHeaders()})
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(response: Response) {
    return response.json();
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
