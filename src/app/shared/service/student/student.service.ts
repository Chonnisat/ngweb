import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../../environments/environment';
import { Student } from '../../model/student';

@Injectable()
export class StudentService {

  options;

  constructor(
    private http: Http
  ) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'JWT ' + localStorage.getItem('token')
    });
    this.options = new RequestOptions({ headers: headers });
  }

  onSearchData(body): Observable<any> {
    const url = `${environment.api}/api/v1/ms0401/filter?studentName=${body.studentName}&limit=${body.limit}&offset=${body.offset}`;

    return this.http.get(url, this.options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
  }

  onDelete(id): Observable<any> {
    const url = `${environment.api}/api/v1/ms0401/${id}`;

    return this.http
      .delete(url, this.options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  pagination(url): Observable<any> {

    const dataUrl = `${environment.api}${url}`;

    return this.http.get(dataUrl, this.options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
  }

  onAdd(student: Student): Observable<any> {
    const url = `${environment.api}/api/v1/ms0402/createStudent`;

    return this.http.post(url, student, this.options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
  }

  readStudent(id): Observable<any> {
    const url = `${environment.api}/api/v1/ms0402/readStudent/${id}`;

    return this.http.get(url, this.options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
  }

  onUpdate(student: Student): Observable<any> {
    const url = `${environment.api}/api/v1/ms0402/updateStudent`;

    return this.http.put(url, student, this.options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
  }

}
