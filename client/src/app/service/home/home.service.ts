import {Injectable} from "@angular/core";
import {Response, Headers, Http} from "@angular/http";
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

  private extractData(res: Response) {
    return res.json();
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
