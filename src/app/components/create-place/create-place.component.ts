import { Component, OnInit, ViewChild } from '@angular/core';
import { PlaceService } from '../../services/place.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { SearchMapComponent } from '../search-map/search-map.component';

@Component({
  selector: 'app-create-place',
  templateUrl: './create-place.component.html',
  styleUrls: ['./create-place.component.css']
})
export class CreatePlaceComponent implements OnInit {

  @ViewChild(SearchMapComponent) mapsearch;

  latitude: number;
  longitude: number;
  address: String;

  name: String;
  description: String;

  constructor(
    private flashMessage : FlashMessagesService,
    private placeService : PlaceService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  onPlaceSubmit() {
    const place = {
	  name: this.name,
	  description: this.description,
	  location: this.mapsearch.address,
    latitude: this.mapsearch.latitude,
    longitude: this.mapsearch.longitude,
    }

    // Add place
    this.placeService.addPlace(place).subscribe(data => {
      if(data.success){
        this.flashMessage.show('Your place has been added.', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/dashboard']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
      }
    });
  }

}
