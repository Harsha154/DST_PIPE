import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import {IModalContent } from "../app/dst.service";
import {IQueryContent} from "../app/dst.query";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

 
  constructor(private httpClient: HttpClient) { }

  insertDstData(dstModelData: IModalContent): Observable<any> {
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post('http://localhost:8080/insert', dstModelData, { headers: options }).pipe(
      tap(data => console.log('Data Fetched:' + JSON.stringify(data))),
      catchError(this.handleError));
  }

  insertQuery(dstQueryData: IQueryContent): Observable<any> {
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post('http://localhost:8080/insert/query', dstQueryData, { headers: options }).pipe(
      tap(data => console.log('Data Fetched:' + JSON.stringify(data))),
      catchError(this.handleError));
  }

  // addProduct(product: any): Observable<any> {
  //   const options = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   return this.httpClient.post( 'http://localhost:8080/insert', product, { headers: options }).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  

  private handleError(err: HttpErrorResponse) {
    let errMsg = '';
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', err.error.message);
      errMsg = err.error.message;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(`Backend returned code ${err.status}`);
      errMsg = err.error.status;
    }
    return throwError(errMsg);
  }
}
