import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IClient } from '../common/client';

@Injectable({
  providedIn: 'root',
})
export class ClientsApiService {
  constructor(private http: HttpClient) {}

  getClients(): Observable<IClient[]> {
    const url = `${environment.api}/clients`;
    return this.http
      .get<IClient[]>(url)
      .pipe((data) => data, catchError(this.handleError));
  }

  findClientById(id: number | null): Observable<IClient> {
    const url = `${environment.api}/clients/${id}`;
    return this.http
      .get<IClient>(url)
      .pipe((data) => data, catchError(this.handleError));
  }

  saveClient(client: IClient): Observable<any> {
    const url = `${environment.api}/clients`;
    return this.http
      .post(url, client)
      .pipe((data) => data, catchError(this.handleError));
  }

  updateClient(id: number, client: IClient): Observable<any> {
    const url = `${environment.api}/clients/${id}`;
    return this.http
      .put(url, client)
      .pipe((data) => data, catchError(this.handleError));
  }

  deleteClient(id: number | undefined): Observable<any> {
    const url = `${environment.api}/clients/${id}`;
    return this.http
      .delete(url)
      .pipe((data) => data, catchError(this.handleError));
  }

  findClientByNameAndNit(name: string, nit: string): Observable<IClient[]> {
    const url = `${environment.api}/clients/findByNameAndNit?name=${name}&nit=${nit}`;
    return this.http
      .get<IClient[]>(url)
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
