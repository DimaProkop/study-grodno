import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import { Headers, Http } from '@angular/http';
import "rxjs/Rx";


@Injectable()
export class HomeService {

  private tagUrl: string;

  constructor(private http: Http) {
    this.tagUrl = "http://localhost:8080/search/find";
  }

  prepareHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-auth-token', localStorage.getItem('x-auth-token'));
    return headers;
  }

  // sendTags(tags: TagModel[]): Observable<any> {
  //   return this.http
  //     .post(this.tagUrl, JSON.stringify(tags), {headers: this.prepareHeaders()})
  //     .map(this.extractData)
  //     .catch(this.handleError);
  // }
  //
  // getTags(): Observable<any> {
  //   let getTagsUrl = "http://localhost:8080/search/get";
  //   return this.http.get(getTagsUrl, {headers: this.prepareHeaders()})
  //     .map(this.extractData)
  //     .catch(this.handleError);
  // }

  private extractData(res: Response) {
    return res.json();
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
