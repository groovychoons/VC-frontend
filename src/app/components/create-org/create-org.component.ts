import { Component, OnInit, ViewChild } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { SearchMapComponent } from '../search-map/search-map.component';

@Component({
  selector: 'app-create-org',
  templateUrl: './create-org.component.html',
  styleUrls: ['./create-org.component.css']
})

export class CreateOrgComponent implements OnInit {

  @ViewChild(SearchMapComponent) mapsearch;

  latitude: number;
  longitude: number;
  address: String;

  name: String;
  description: String;
  website: String;
  twitter: String;
  facebook: String;

  constructor(
    private flashMessage : FlashMessagesService,
    private teamService : TeamService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  onTeamSubmit() {
    const team = {
	  name: this.name,
	  description: this.description,
	  base_location: this.mapsearch.address,
    latitude: this.mapsearch.latitude,
    longitude: this.mapsearch.longitude,
	  website: this.website,
	  twitter: this.twitter,
	  facebook: this.facebook
    }

    // Add organisation
    this.teamService.addTeam(team).subscribe(data => {
      if(data.success){
        this.flashMessage.show('Your organisation has been added.', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/dashboard']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
      }
    });
  }

}
