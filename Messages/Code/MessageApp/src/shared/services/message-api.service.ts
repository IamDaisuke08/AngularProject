import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { MessageItem } from '../models/messageItem';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageApiService {

  private baseUrl : string = "http://localhost:5134/api/Messages";

  constructor(private client: HttpClient) { }

  private getStandarOptions() : any {
    return {
      headers : new HttpHeaders({
        'Access-Control-Allow-Origin': 'http://localhost:5134/',
        'Access-Control-Allow-Credentials': 'true',
        'Content-Type': 'application/json',
      })
    };
  }

  getMessages() {
    let options = this.getStandarOptions();
    return this.client.get(this.baseUrl, options).pipe(catchError(this.handleError));
  }

  deleteMessage(messageId : number) {
    let options = this.getStandarOptions();
    return this.client.delete(this.baseUrl + "/" + messageId, options).pipe(catchError(this.handleError));
  }

  updateMessage(message : MessageItem) {
    let options = this.getStandarOptions();
    return this.client.put(this.baseUrl + "/" + message.id, message, options).pipe(catchError(this.handleError));
  }

  private handleError(error : HttpErrorResponse) {
    console.log('ERROR: ', error.error);
    return throwError(() => new Error('An error occured while connecting to the server. Please try again.', error.error));
  }
}