import { Injectable } from '@angular/core';

import { Observable,of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

import { OMDBMovieApi } from '../../apis/baseURLs'
import { ProcessHttpMsgService } from "../process-http-msg.service";
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  key: String = '756abb2f';
  movieDetails: any[] = [];

  constructor(private http: HttpClient,
    private processMsgService: ProcessHttpMsgService) { }

  getMovieIds(term: String): Observable<any[]> {
    const link = `/?apikey=${this.key}&s=${term}`;

    return this.http.get<any[]>(OMDBMovieApi + link)
      .pipe(catchError(this.processMsgService.handleError));
  }

  getMovieDetails(id: String): Observable<any[]> {
    const link = `/?apikey=${this.key}&i=${id}`;

    return this.http.get<any[]>(OMDBMovieApi + link)
      .pipe(catchError(this.processMsgService.handleError));
  }

  /*
  getMovies(term: String): Observable<any[]> {
    const link = `/?apikey=${this.key}&s=avengers`;

    return this.http.get<any[]>(OMDBMovieApi + link)
      .pipe(catchError(this.processMsgService.handleError));
  }

  getDetails(term: String) {
    this.getMovies(term).subscribe((movieIds) => {
      movieIds.Search.map((movieid) => {
        return this.http.get<any[]>(OMDBMovieApi + `/?apikey=${this.key}&i=${movieid.imdbID}`).subscribe((movie) => {
          this.movieDetails = [...this.movieDetails, movie];
          console.log(this.movieDetails);
        })
      })
      
    });

    return this.movieDetails;
  }

  */
 
}
