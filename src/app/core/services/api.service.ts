import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';


@Injectable()
export class ApiService {

  constructor(private http: HttpClient, private router: Router) { }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(
      `${environment.api_url}${path}`,
      {
        headers: {
          'Content-Type': 'application/json',}
      })
      .pipe(catchError(err => this.handleError(err, this.router)));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .pipe(catchError(err => {
        // console.log('errrrrrr', err);
        return this.handleError(err, this.router);
      }));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .pipe(catchError(err => {
        console.log('errrrrrr put ', err);
        return this.handleError(err, this.router);
      }));
  }

  delete(path: string): Observable<any> {
    return this.http.delete(
      `${environment.api_url}${path}`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .pipe(catchError(err => {
        console.log('errrrrrr', err);
        return this.handleError(err, this.router);
      }));
  }

  handleError({ error }, _router: Router) {
    console.log('handleError this = ', error);
    if (error.error && error.error.code === 'UNAUTHORIZED') {
      console.log('caiu no não autorizado');
      _router.navigate(['/']);
    }
    return throwError(error);
  }
}
