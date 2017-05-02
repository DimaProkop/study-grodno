import {Injectable} from '@angular/core';
import {Response, URLSearchParams, Http, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {FacultyModel} from "../../model/faculty.model";


@Injectable()
export class FacultyService {

  private facultyUrl: string;

  constructor(private http: Http) {
    this.facultyUrl = "http://localhost:8080/faculty";
  }

  prepareHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-auth-token', localStorage.getItem('x-auth-token'));
    return headers;
  }

  getFacultyById(id: number): Observable<FacultyModel> {
    let params = new URLSearchParams();
    params.set('id', "" + id);
    return this.http.get(this.facultyUrl + "/findById", {search: params, headers: this.prepareHeaders()})
      .map(this.extractData)
      .catch(this.handleError);
  }

  getFacultyBySpeciality(id: number): Observable<FacultyModel> {
    return this.http.get(this.facultyUrl + "/faculty-by-speciality/" + id, {headers: this.prepareHeaders()})
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

  create(faculty: any): Observable<any> {
    return this.http
      .post(this.facultyUrl, JSON.stringify(faculty), {headers: this.prepareHeaders()})
      .map(this.extractData)
      .catch(this.handleError);
  }

  getFacultiesByInstitution(id :number): Observable<FacultyModel[]> {
    return this.http.get(this.facultyUrl + "/institution=" + id, {headers: this.prepareHeaders()})
      .map(this.extractData)
      .catch(this.handleError);
  }

  getAll(): Observable<FacultyModel[]> {
    return this.http.get(this.facultyUrl, {headers: this.prepareHeaders()})
      .map(this.extractData)
      .catch(this.handleError);
  }
}
