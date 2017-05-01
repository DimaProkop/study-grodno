import { Observable } from "rxjs/Observable";
import {Injectable, EventEmitter} from "@angular/core";
import { Response } from "@angular/http";
import { Headers, Http } from '@angular/http';
import "rxjs/Rx";
import { SpecialityModel } from "../../model/speciality.model";
import {HeadersService} from "../headers.service";


@Injectable()
export class SpecialityService {

  private specialityURL: string;

  constructor(private http: Http) {
    this.specialityURL = "http://localhost:8080/speciality";
  }

  create(speciality: SpecialityModel): Observable<SpecialityModel> {
    return this.http
      .post(this.specialityURL, JSON.stringify(speciality), { headers: HeadersService.prepareHeaders() })
      .map(this.extractData)
      .catch(this.handleError);
  }

  getById(id: number): Observable<SpecialityModel> {
    return this.http.get(this.specialityURL + "/" + id, { headers: HeadersService.prepareHeaders() })
      .map(this.extractData)
      .catch(this.handleError);
  }

  getAll(): Observable<SpecialityModel[]> {
    return this.http.get(this.specialityURL, { headers: HeadersService.prepareHeaders() })
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

