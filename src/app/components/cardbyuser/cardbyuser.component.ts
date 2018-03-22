import { Component, OnInit, Input } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardbyuser',
  templateUrl: './cardbyuser.component.html',
  styleUrls: ['./cardbyuser.component.scss']
})
export class CardbyuserComponent implements OnInit {

  requests: any;

  constructor(
    private requestService:RequestService,
    private router: Router
  ) { }

  ngOnInit() {
    this.requestService.viewRequestsByUser().subscribe(result => {
      this.requests = result;
    },
    err => {
      console.log(err);
      return false;
    });
  }


}