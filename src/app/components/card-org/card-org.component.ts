import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-org',
  templateUrl: './card-org.component.html',
  styleUrls: ['./card-org.component.scss']
})
export class CardOrgComponent implements OnInit {
  
  requests: any;

  constructor(
    private teamService:TeamService,
    private router: Router
  ) { }

  ngOnInit() {
    this.teamService.viewTeams().subscribe(result => {
      this.requests = result;
    },
    err => {
      console.log(err);
      return false;
    });
  }
}
