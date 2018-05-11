import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params }   from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { TeamService } from '../../services/team.service'

@Component({
  selector: 'app-view-org-as-owner',
  templateUrl: './view-org-as-owner.component.html',
  styleUrls: ['./view-org-as-owner.component.css']
})
export class ViewOrgAsOwnerComponent implements OnInit {

  request: Object;
  user: Object;
  private sub: any;
  id: string;
  page_type: string = "organisation";

  pageMode : string;

  requestPrior: Object;

  constructor(
    private teamService:TeamService,
    private flashMessage:FlashMessagesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
      this.pageMode = "viewMode";

    this.sub = this.route.params.subscribe(params => {
       this.id = params['id']; 
    });
    console.log(this.id);
    this.getTeam(this.id);


    this.requestPrior = new Object();
  }

  getTeam(id): void {
    this.teamService.viewTeam(id).subscribe(result => {
      this.request = result.request;

      this.requestPrior = result.request;

    },
    err => {
      console.log(err);
      return false;
    });
  }
  
  editRequest() : void {
    Object.assign(this.requestPrior, this.request);
    this.pageMode = "editMode";
  }
  
  saveRequest() : void {
    this.requestPrior = new Object();
    this.pageMode = "viewMode";
  }
  
  cancelEdit() : void {
    Object.assign(this.request, this.requestPrior);
        this.requestPrior = new Object();

    this.pageMode = "viewMode";
    
  }
}
