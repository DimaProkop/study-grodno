/**
 * Created by DENIS on 12.04.2017.
 */
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {Response, Headers, Http} from "@angular/http";
import "rxjs/Rx";
import {NewsModel} from "../../model/news.model";


@Injectable()
export class NewsService {

  private newsURL: string;

  constructor(private http: Http) {
    this.newsURL = "http://localhost:8080/news";
  }

  prepareHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-auth-token', localStorage.getItem('x-auth-token'));
    return headers;
  }

  save(news: NewsModel): Observable<NewsModel> {
    return this.http
      .post(this.newsURL, JSON.stringify(news), {headers: this.prepareHeaders()})
      .map(this.extractData)
      .catch(this.handleError);
  }

  getAll(): Observable<NewsModel[]> {
    return this.http.get(this.newsURL, {headers: this.prepareHeaders()})
      .map(this.extractData)
      .catch(this.handleError);
  }

  getNewsByInstitution(id: number): Observable<NewsModel[]> {
    return this.http.get(this.newsURL + "/institution=" + id, {headers: this.prepareHeaders()})
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
