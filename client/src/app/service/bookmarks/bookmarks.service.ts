import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Bookmark} from "../../model/bookmark.model";
import {Http, Headers, Response} from "@angular/http";
import {HeadersService} from "../headers.service";

@Injectable()
export class BookmarksService {

  private addUrl: string;
  private getByChoiceUrl: string;

  constructor(private http: Http) {
    this.addUrl = "http://localhost:8080/bookmark/add";
    this.getByChoiceUrl = "http://localhost:8080/bookmark/getByChoice";
  }

  addBookmark(bookmark: Bookmark): Observable<Bookmark> {
    return this.http
      .post(this.addUrl, JSON.stringify(bookmark), {headers: HeadersService.prepareHeaders()})
      .map(BookmarksService.extractData)
      .catch(BookmarksService.handleError);
  }

  getByChoice(id: number): Observable<any[]> {
    return this.http
      .post(this.getByChoiceUrl, JSON.stringify(id), {headers: HeadersService.prepareHeaders()})
      .map(BookmarksService.extractData)
      .catch(BookmarksService.handleError);
  }

  private static extractData(res: Response) {
    return res.json();
  }

  private static handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
