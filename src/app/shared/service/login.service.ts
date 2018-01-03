import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../environments/environment';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  doLogin(body): Observable<any> {
    const bodyString = JSON.stringify(body); // Stringify payload

    return this.http.post(`${environment.api}/api/v1/login/doLoginStudent`, body) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
  }


}
