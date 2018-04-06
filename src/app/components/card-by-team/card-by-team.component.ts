import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { ActivatedRoute, Params, Router }   from '@angular/router';

@Component({
  selector: 'app-card-by-team',
  templateUrl: './card-by-team.component.html',
  styleUrls: ['./card-by-team.component.scss']
})
export class CardByTeamComponent implements OnInit {
  
  requests: any;
  private sub: any;
  id: string;

  constructor(
    private requestService:RequestService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id']; 
    });
    console.log(this.id);
    this.getTeamRequests(this.id);

  }

  getTeamRequests(id): void {
    this.requestService.viewRequestsByTeam(id).subscribe(result => {
      this.requests = result;
    },
    err => {
      console.log(err);
      return false;
    });
  }
}
