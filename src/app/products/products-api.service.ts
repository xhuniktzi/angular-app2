import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductsApiService {
  url = 'http://localhost:5000/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    const url = 'http://localhost:5000/products';
    return this.http
      .get<IProduct[]>(url)
      .pipe((data) => data, catchError(this.handleError));
  }

  findProductByCode(code: string | null): Observable<IProduct | undefined> {
    const url = `http://localhost:5000/products/${code}`;
    return this.http
      .get<IProduct>(url)
      .pipe((data) => data, catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
