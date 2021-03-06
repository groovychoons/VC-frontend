import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { User } from '../models/user';
import { Observable } from 'rxjs';



@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  userId: string;

  constructor(private http:Http) { }

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('/users/register', user, {headers: headers})
      .map(res => res.json());
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('/users/authenticate', user, {headers: headers})
      .map(res => res.json());
  }

  deleteUser(){
    let headers = new Headers();
    this.userId = localStorage.getItem('userId');
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.delete(`users/delete/${this.userId}`, {headers: headers})
      .map(res => res.json());
  }

  getProfile(): Observable<User>{
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('/users/profile', {headers: headers})
      .map(res => res.json().user);
  }

  getUserById(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get(`users/getbyuser/${id}`, {headers: headers})
      .map(res => res.json());
  }

  storeUserData(token, user){
  	localStorage.setItem('id_token', token);
	  localStorage.setItem('userId', user.id);
	  this.authToken = token;
	  this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  getUserId() {
    this.userId = localStorage.getItem('userId');
    return this.userId;
  }

  loggedIn(){
    return tokenNotExpired('id_token');
  }

  logout(){
  	this.authToken = null;
  	this.user = null;
  	localStorage.clear();
  }

}
