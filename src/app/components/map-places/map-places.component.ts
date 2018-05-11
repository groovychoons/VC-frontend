import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../../services/place.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-map-places',
  templateUrl: './map-places.component.html',
  styleUrls: ['./map-places.component.css']
})
export class MapPlacesComponent implements OnInit {

  requests: any;

  zoom: number = 4;
  lat: number = 49.4521;
  lng: number = 11.0767;

  constructor(
    private placeService:PlaceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.placeService.viewPlaces().subscribe(result => {
      this.requests = result;
    },
    err => {
      console.log(err);
      return false;
    });
  }

  
}
