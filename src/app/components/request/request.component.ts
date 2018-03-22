import { Component, OnInit, ViewChild } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { SearchMapComponent } from '../search-map/search-map.component';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})

export class RequestComponent implements OnInit {

  @ViewChild(SearchMapComponent) mapsearch;

  latitude: number;
  longitude: number;
  address: String;

  title: String;
  request_for: String;
  description: String;
  urgency: String;
  expertise: String;

  constructor(
    private flashMessage:FlashMessagesService,
    private requestService:RequestService,
    private router: Router
  ) { }

  ngOnInit() {
  }
    

  onRequestSubmit() {
    const request = {
	  title: this.title,
	  request_for: this.request_for,
	  description: this.description,
	  location: this.mapsearch.address,
    latitude: this.mapsearch.latitude,
    longitude: this.mapsearch.longitude,
	  urgency: this.urgency,
	  expertise: this.expertise
    }

    // Add request
    this.requestService.addRequest(request).subscribe(data => {
      if(data.success){
        this.flashMessage.show('Your request has been submitted for approval.', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/explore']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
      }
    });
  }

  urgencies = [
    {name: ""},
    {name: "High"},
    {name: "Medium"},
    {name: "Low"}
  ];

  skills = [
    {name: ""},
    {name: "Admin / Coordination"},
    {name: "Arts, Sports and Music"},
    {name: "Construction"},
    {name: "Cooking / Food"},
    {name: "Drivers License"},
    {name: "Education"},
    {name: "Environmental"},
    {name: "General Support"},
    {name: "Help from home"},
    {name: "Language / Translation"},
    {name: "Legal / Info"},
    {name: "Logistics and warehouses"},
    {name: "Medical and health care"},
    {name: "Search and rescue"},
    {name: "Tech and IT"},
    {name: "Work with kids"}
  ];
}
