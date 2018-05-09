import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';

import { Request } from '../models/request';
import { ApiResponse } from '../models/ApiResponse';


@Injectable()
export class RequestService {
  
  request: any;	
  authToken: any;
  user: any;
  _id: string;

  constructor(
    private http:Http,
    private httpClient:HttpClient
  ) { }

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

   viewAllRequests(){
    let headers = new Headers();
    headers.append('Content-Type','application/json')
    return this.http.get('/requests', {headers: headers})
      .map(res => res.json().data);
  }

   viewRequests(title: string): Observable<ApiResponse> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type','application/json')

    let params = new HttpParams();
    params = params.append('title', title);


    return this.httpClient.get('/requests', {headers, params})
      .map((response: ApiResponse) => {
        return response.data;
      });
  }

   viewRequestsByUser(){
    this.user = localStorage.getItem('userId');
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get(`requests/getbyuser/${this.user}`, {headers: headers})
      .map(res => res.json().data);
  }

   viewRequestsByTeam(teamid){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get(`requests/getbyteam/${teamid}`, {headers: headers})
      .map(res => res.json().data);
  }

}
