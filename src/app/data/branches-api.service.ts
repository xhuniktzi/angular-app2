import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IBranch } from '../common/branch';

@Injectable({
  providedIn: 'root',
})
export class BranchesApiService {
  constructor(private http: HttpClient) {}

  getBranches(): Observable<IBranch[]> {
    const url = `${environment.api}/branches`;
    return this.http
      .get<IBranch[]>(url)
      .pipe((data) => data, catchError(this.handleError));
  }

  findBranchByName(name: string): Observable<IBranch[]> {
    const url = `${environment.api}/branches/findByName/${name}`;
    return this.http
      .get<IBranch[]>(url)
      .pipe((data) => data, catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    console.error(err);
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(err.error);
  }
}
