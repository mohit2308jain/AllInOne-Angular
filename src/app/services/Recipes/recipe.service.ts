import { Injectable } from '@angular/core';

import { Observable,of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

import { EDAMAMRecipeApi } from '../../apis/baseURLs'
import { ProcessHttpMsgService } from "../process-http-msg.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  APP_ID: String = 'afb40015';
  APP_KEY: String = 'ea2ef14607b092a79cc4b02f52d90878';

  constructor(private http: HttpClient,
    private processMsgService: ProcessHttpMsgService) { }

    getRecipes(term: String): Observable<any[]> {
      const link = `/search?q=${term}&app_id=${this.APP_ID}&app_key=${this.APP_KEY}`;
      return this.http.get<any[]>(EDAMAMRecipeApi + link)
        .pipe(catchError(this.processMsgService.handleError));
    }
}
