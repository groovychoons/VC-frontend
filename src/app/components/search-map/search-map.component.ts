import { Component, OnInit, ElementRef, NgZone, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { RequestService } from '../../services/request.service'
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import {} from '@types/googlemaps'; 
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-search-map',
  templateUrl: './search-map.component.html',
  styleUrls: ['./search-map.component.css']
})
export class SearchMapComponent implements OnInit {

  latitude: number;
  longitude: number;
  address: String; 
  searchControl: FormControl;
  zoom: number;
  requests: any;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private flashMessage:FlashMessagesService,
    private requestService:RequestService,
    private router: Router,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  ngOnInit() {

    this.requestService.viewAllRequests().subscribe(result => {
      this.requests = result;
    },
    err => {
      console.log(err);
      return false;
    });
    
    //set google maps defaults
    this.zoom = 4;
    this.latitude = 48.8566;
    this.longitude = 2.3522;

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.address = place.formatted_address;
          this.zoom = 12;
        });
      });
    });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  @Output() onPlaceChange = new EventEmitter<number>();

  getCoords() {
    this.onPlaceChange.emit(this.latitude)
  }

}
