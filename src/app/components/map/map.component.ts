import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  
  requests: any;

  zoom: number = 4;
  lat: number = 49.4521;
  lng: number = 11.0767;

  constructor(
    private requestService:RequestService,
    private router: Router
  ) { }

  ngOnInit() {
    this.requestService.viewAllRequests().subscribe(result => {
      this.requests = result;
    },
    err => {
      console.log(err);
      return false;
    });
  }

  

}
