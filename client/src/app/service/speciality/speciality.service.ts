import { Observable } from "rxjs/Observable";
import {Injectable, EventEmitter} from "@angular/core";
import { Response } from "@angular/http";
import { Headers, Http } from '@angular/http';
import "rxjs/Rx";
import { SpecialityModel } from "../../model/speciality.model";


@Injectable()
export class SpecialityService {

  private specialityURL: string;

  store: any[] = [{



}];

  prepareHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-auth-token', localStorage.getItem('x-auth-token'));
    return headers;
  }

  constructor(private http: Http) {
    this.specialityURL = "http://localhost:8080/api/speciality";
  }

  create(speciality: SpecialityModel): Observable<SpecialityModel> {
    return this.http
      .post(this.specialityURL, JSON.stringify(speciality), { headers: this.prepareHeaders() })
      .map(this.extractData)
      .catch(this.handleError);
  }

  getAll(): Observable<SpecialityModel[]> {
    return this.http.get(this.specialityURL, { headers: this.prepareHeaders() })
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

