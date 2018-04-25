import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Feed } from '../models/feed';

@Injectable()
export class AysBlogService {

  private rssToJsonServiceBaseUrl: string = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40areyousyrious'

  constructor(
    private http: Http
  ) { }

  getFeedContent(): Observable<Feed> {
    return this.http.get(this.rssToJsonServiceBaseUrl)
            .map(this.extractFeeds)
            .catch(this.handleError);
  }

  private extractFeeds(res: Response): Feed {
    let feed = res.json();
    return feed || { };
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
