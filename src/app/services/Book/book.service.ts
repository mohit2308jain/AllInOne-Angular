import { Injectable } from '@angular/core';

import { Observable,of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

import { GoogleBooksApi } from '../../apis/baseURLs'
import { ProcessHttpMsgService } from "../process-http-msg.service";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  maxResults: number = 20;
  startIndex: number = 1;

  constructor(private http: HttpClient,
    private processMsgService: ProcessHttpMsgService) { }

  getBooks(term: String): Observable<any[]> {
    const link = `/volumes?q=${term}&maxResults=${this.maxResults}&startIndex=${this.startIndex}`;
    return this.http.get<any[]>(GoogleBooksApi + link)
      .pipe(catchError(this.processMsgService.handleError));
  }
}
