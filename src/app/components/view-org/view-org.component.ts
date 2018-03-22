import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params }   from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { TeamService } from '../../services/team.service'

@Component({
  selector: 'app-view-org',
  templateUrl: './view-org.component.html',
  styleUrls: ['./view-org.component.css']
})
export class ViewOrgComponent implements OnInit {


  request: Object;
  user: Object;
  private sub: any;
  id: string;

  constructor(
    private teamService:TeamService,
    private flashMessage:FlashMessagesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id']; 
    });
    console.log(this.id);
    this.getTeam(this.id);
  }

  getTeam(id): void {
  	this.teamService.viewTeam(id).subscribe(result => {
  	  this.request = result.request;
      console.log(this.request);

  	},
  	err => {
      console.log(err);
      return false;
    });
  }


}
