import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IInvoiceDto } from '../common/InvoiceDto';
import { IQueryReport } from '../common/queryReport';
import { IResult } from '../common/result';

@Injectable({
  providedIn: 'root',
})
export class InvoiceApiService {
  constructor(private http: HttpClient) {}

  saveInvoice(invoice: IInvoiceDto): Observable<any> {
    const url = `${environment.api}/invoices`;
    return this.http
      .post(url, invoice)
      .pipe((data) => data, catchError(this.handleError));
  }

  findInvoices(query: IQueryReport): Observable<IResult[]> {
    const url = `${environment.api}/invoices/getInvoice`;
    return this.http
      .post<IResult[]>(url, query)
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
