import { Observable } from "rxjs/Observable";
import {Injectable, EventEmitter} from "@angular/core";
import { Response } from "@angular/http";
import { Headers, Http } from '@angular/http';
import "rxjs/Rx";
import { SpecialityModel } from "../../model/speciality.model";
import {HeadersService} from "../headers.service";
import {Comment} from "../../model/comment.model";


@Injectable()
export class SpecialityService {

  private specialityURL: string;
  private commentsUrl: string;

  constructor(private http: Http) {
    this.specialityURL = "http://localhost:8080/speciality";
    this.commentsUrl = "http://localhost:8080/speciality/getComments";
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

  getComments(id: number): Observable<Comment[]> {
    return this.http
      .post(this.commentsUrl, JSON.stringify(id), { headers: HeadersService.prepareHeaders() })
      .map(this.extractData)
      .catch(this.handleError);
  }

  addComment(comment: Comment): Observable<any> {
    return this.http
      .post(this.specialityURL + "/addComment", JSON.stringify(comment), { headers: HeadersService.prepareHeaders() })
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    console.log(res.json());
    return res.json();
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

