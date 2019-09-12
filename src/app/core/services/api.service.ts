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

  handleError({ error }, _router: Router) {
    if (error.error && error.error.code === 'UNAUTHORIZED') {
      _router.navigate(['/']);
    }
    return throwError(error);
  }
}
