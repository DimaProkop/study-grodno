import {Headers} from "@angular/http";
/**
 * Created by dionp on 01.05.2017.
 */
export class HeadersService {

  public static prepareHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-auth-token', localStorage.getItem('x-auth-token'));
    return headers;
  }
}
