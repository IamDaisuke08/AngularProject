import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private client : HttpClient) { }

  getCountries() {
    return this.client.get('countries.json').pipe(catchError(this.handleError));
  }

  private handleError(error : HttpErrorResponse) {
    console.log('ERROR: ', error.error);
    return throwError(() => new Error('An error occured while connecting to the server. Please try again.', error.error));
  }
}
