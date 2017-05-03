import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {MessageModel} from "../../model/message.model";
import {HeadersService} from "../headers.service";
import {Headers, Http, Response} from '@angular/http';
import "rxjs/Rx";


@Injectable()
export class MailService {

  private mailUrl = "http://localhost:8080/mail";

  constructor(private http: Http) { }

  getMessages(flag: boolean): Observable<MessageModel[]> {
    return this.http
      .put(this.mailUrl + "/getMessages=" + flag, JSON.stringify(flag), { headers: HeadersService.prepareHeaders() })
      .map(this.extractData)
      .catch(this.handleError);
  }

  getInc(): Observable<number> {
    return this.http.get(this.mailUrl + "/getIncs", { headers: HeadersService.prepareHeaders() })
      .map(this.extractData)
      .catch(this.handleError);
  }

  getById(id: number): Observable<MessageModel> {
    return this.http.get(this.mailUrl + "/" + id, { headers: HeadersService.prepareHeaders() })
      .map(this.extractData)
      .catch(this.handleError);
  }

  sendMessage(message: MessageModel): Observable<any> {
    return this.http
      .post(this.mailUrl + "/add", JSON.stringify(message), { headers: HeadersService.prepareHeaders() })
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
