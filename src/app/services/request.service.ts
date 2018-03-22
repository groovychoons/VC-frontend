import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RequestService {
  
  request: any;	
  authToken: any;
  user: any;
  _id: string;

  constructor(private http:Http) { }

  addRequest(request){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.post('/requests/add', request, {headers: headers})
      .map(res => res.json());
  }

  deleteRequest(id){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.delete(`requests/delete/${id}`, {headers: headers})
      .map(res => res.json());
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  
   viewRequest(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get(`requests/get/${id}`, {headers: headers})
      .map(res => res.json());
  }

   viewRequests(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('/requests/get', {headers: headers})
      .map(res => res.json().data);
  }

   viewRequestsByUser(){
    this.user = localStorage.getItem('userId');
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get(`requests/getbyuser/${this.user}`, {headers: headers})
      .map(res => res.json().data);
  }

}
