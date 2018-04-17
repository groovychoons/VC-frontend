import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../../services/place.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-place',
  templateUrl: './card-place.component.html',
  styleUrls: ['./card-place.component.scss']
})
export class CardPlaceComponent implements OnInit {
	
  requests: any;

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
