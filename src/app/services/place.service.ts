import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PlaceService {

  place: any;	
  authToken: any;
  
  constructor(private http:Http) { }

  addPlace(place){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.post('/places/add', place, {headers: headers})
      .map(res => res.json());
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

   viewPlace(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get(`/places/get/${id}`, {headers: headers})
      .map(res => res.json());
  }

   viewPlaces(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('/places/get', {headers: headers})
      .map(res => res.json().data);
  }

}
