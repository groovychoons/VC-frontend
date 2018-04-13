import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tweet } from '../models/tweet';

export interface TwitterResponse {
  data: any;
  resp: any;
}

@Injectable()
export class TwitterService {

  constructor(private http: HttpClient) { }

  user() {
    return this.http.get<TwitterResponse>('/twitter/api/user');
  }

  home(since?: string) {
    return this.http.get<TwitterResponse>('/twitter/api/home?since=${since}');
  }

  action(property: 'favorite'|'retweet', id: string, state: boolean) {
    return this.http.post<TwitterResponse>('/twitter/api/${property}/${id}', {state});
  }
}