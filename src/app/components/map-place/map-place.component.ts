import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map-place',
  templateUrl: './map-place.component.html',
  styleUrls: ['./map-place.component.css']
})
export class MapPlaceComponent implements OnInit {
	
  zoom: number = 4;

  @Input() lat: number = 49.4521;
  @Input() long: number = 11.0767;

  constructor() { }

  ngOnInit() {
  }

}
