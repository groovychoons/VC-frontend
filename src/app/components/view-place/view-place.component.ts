import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params }   from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { PlaceService } from '../../services/place.service';

@Component({
  selector: 'app-view-place',
  templateUrl: './view-place.component.html',
  styleUrls: ['./view-place.component.css']
})
export class ViewPlaceComponent implements OnInit {

  request: Object;
  user: Object;
  private sub: any;
  id: string;
  page_type: string = "place";

  constructor(
    private placeService:PlaceService,
    private flashMessage:FlashMessagesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id']; 
    });
    console.log(this.id);
    this.getPlace(this.id);
  }

  getPlace(id): void {
  	this.placeService.viewPlace(id).subscribe(result => {
  	  this.request = result.request;
            console.log(id);
      console.log(this.request);
  	},
  	err => {
      console.log(err);
      return false;
    });
  }

}
