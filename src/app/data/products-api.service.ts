import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IProduct } from '../common/product';

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

  findProductByCode(code: string | null): Observable<IProduct> {
    const url = `http://localhost:5000/products/${code}`;
    return this.http
      .get<IProduct>(url)
      .pipe((data) => data, catchError(this.handleError));
  }

  saveProduct(product: IProduct): Observable<any> {
    const url = 'http://localhost:5000/products';
    return this.http
      .post(url, product)
      .pipe((data) => data, catchError(this.handleError));
  }

  updateProduct(code: string, product: IProduct): Observable<any> {
    const url = `http://localhost:5000/products/${code}`;
    return this.http
      .put(url, product)
      .pipe((data) => data, catchError(this.handleError));
  }

  deleteProduct(code: string | undefined): Observable<any> {
    const url = `http://localhost:5000/products/${code}`;
    return this.http
      .delete(url)
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
