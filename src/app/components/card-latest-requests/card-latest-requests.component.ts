import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-card-latest-requests',
  templateUrl: './card-latest-requests.component.html',
  styleUrls: ['./card-latest-requests.component.css']
})

export class CardLatestRequestsComponent implements OnInit {

  requests;

  constructor(
  private requestService:RequestService) {
      
 }

  ngOnInit() {
      this.requestService.viewAllRequests().subscribe(result => {
      console.log(result);
      this.requests = result;
    },
    err => {
      console.log(err);
      return false;
    });
  }

}
