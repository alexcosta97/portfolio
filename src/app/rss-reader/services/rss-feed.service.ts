import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Feed } from '../models/feed';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RssFeedService {
  private rss2JsonBaseUrl: string =
    'https://api.rss2json.com/v1/api.json?rss_url=';
  private apiKeyParameter: string = environment.rss2jsonKey ? `&api_key=${environment.rss2jsonKey}` : '';

  constructor(private http: HttpClient) {}

  getFeedContent(url: string): Observable<Feed> {
    return this.http
      .get<Feed>(this.rss2JsonBaseUrl + url + this.apiKeyParameter, { observe: 'response' })
      .pipe(map(this.extractFeeds), catchError(this.handleError));
  }

  private extractFeeds(res: HttpResponse<Feed>): Feed {
    return res.body as Feed;
  }

  private handleError(error: HttpErrorResponse) {
    let errMessage = error.message
      ? error.message
      : error.status
      ? `${error.status} - ${error.statusText}`
      : 'Server error';
    console.error(errMessage);
    return throwError(new Error(errMessage));
  }
}
