import { Component, OnInit, ViewChild } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { SearchMapComponent } from '../search-map/search-map.component';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { TeamService } from '../../services/team.service'

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})

export class RequestComponent implements OnInit {
  
  user: User;
  userName: String;
  userId: String;
  orgs: any;

  @ViewChild(SearchMapComponent) mapsearch;

  latitude: number;
  longitude: number;
  address: String;

  title: String;
  request_for: String;
  description: String;
  urgency: String;
  expertise: String;
  authorOptions: any[];
  authorId: String;

  selectedAuthor: any;

  constructor(
    private flashMessage:FlashMessagesService,
    private requestService:RequestService,
    private router: Router,
    private authService:AuthService,
    private teamService:TeamService
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile;
      this.userName = this.user.f_name + " " + this.user.l_name;
      this.userId = this.user._id;
      this.authorOptions = [
        {id: this.userId, name: this.userName, type: "user"}
      ];
      this.selectedAuthor = this.authorOptions[0];
    },
    err => {
      console.log(err);
      return false;
    });

    this.teamService.viewTeamsByUser().subscribe(result => {
      this.orgs = result;
      for (let org of this.orgs){
        this.authorOptions.push({id: org.id, name: org.name, type: "organisation"});
      }
      for (let org of this.authorOptions){
        console.log(org);
      }
    },
    err => {
      console.log(err);
      return false;
    });

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
	  expertise: this.expertise,
    author_id: this.selectedAuthor.id,
    author: this.selectedAuthor.name,
    author_type: this.selectedAuthor.type
    }

    // Add request
    this.requestService.addRequest(request).subscribe(data => {
      if(data.success){
        this.flashMessage.show('Your request has been submitted for approval.', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/requests']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
      }
    });
  }

  onChange(deviceValue) {
    console.log(this.selectedAuthor);
    this.selectedAuthor = deviceValue;
     console.log(this.selectedAuthor.id + this.selectedAuthor.name);
  }

  urgencies = [
    {name: ""},
    {name: "High"},
    {name: "Medium"},
    {name: "Low"}
  ];

  skills = [
    {name: "", image: "test"},
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
