import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FeedbackService {

  authToken: any;
  
  constructor(private http:Http) { }

  addComment(comment){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.post('/feedbacks/add', comment, {headers: headers})
      .map(res => res.json());
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

   viewFeedback(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get(`/feedbacks/get/${id}`, {headers: headers})
      .map(res => res.json());
  }

   viewFeedbackByTeam(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get(`/feedbacks/getbyteam/${id}`, {headers: headers})
      .map(res => res.json());
  }

   viewFeedbackByPlace(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get(`/feedbacks/getbyplace/${id}`, {headers: headers})
      .map(res => res.json());
  }

   viewFeedbacks(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('/feedbacks/get', {headers: headers})
      .map(res => res.json().data);
  }

  deleteFeedback(id){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.delete(`feedbacks/delete/${id}`, {headers: headers})
      .map(res => res.json());
  }

}
