import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  requests: any;

  constructor(
    private requestService:RequestService,
    private router: Router
  ) { }

  ngOnInit() {
    this.requestService.viewRequests().subscribe(result => {
      this.requests = result;
    },
    err => {
      console.log(err);
      return false;
    });
  }

}
