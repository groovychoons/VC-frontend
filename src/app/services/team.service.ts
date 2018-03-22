import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TeamService {

  team: any;	
  authToken: any;
  user: any;
  _id: string;

  constructor(private http:Http) { }

  addTeam(team){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.post('/teams/add', team, {headers: headers})
      .map(res => res.json());
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

   viewTeam(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get(`teams/get/${id}`, {headers: headers})
      .map(res => res.json());
  }

   viewTeams(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('/teams/get', {headers: headers})
      .map(res => res.json().data);
  }


}
