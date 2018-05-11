import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { ActivatedRoute, Params, Router }   from '@angular/router';

@Component({
  selector: 'app-card-req-by-org',
  templateUrl: './card-req-by-org.component.html',
  styleUrls: ['./card-req-by-org.component.scss']
})
export class CardReqByOrgComponent implements OnInit, OnChanges {

  
  requests: any;
  private sub: any;
  @Input() id: string;

  constructor(
    private requestService:RequestService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getTeamRequests(this.id);
  }

  ngOnChanges() {
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
