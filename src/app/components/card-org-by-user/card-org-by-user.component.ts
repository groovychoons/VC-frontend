import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-card-org-by-user',
  templateUrl: './card-org-by-user.component.html',
  styleUrls: ['./card-org-by-user.component.scss']
})
export class CardOrgByUserComponent implements OnInit {
	
  orgs;

  constructor(
    private flashMessage:FlashMessagesService,
    private router: Router,
    private teamService:TeamService

  ) { }

  ngOnInit() {
    this.teamService.viewTeamsByUser().subscribe(result => {
      this.orgs = result;
    },
    err => {
      console.log(err);
      return false;
    });

  }

}
