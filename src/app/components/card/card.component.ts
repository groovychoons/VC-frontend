import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { RequestService } from '../../services/request.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {
  
  @Input() query: string = "";
  requests;

  constructor(
    private requestService:RequestService,
    private router: Router
  ) { }

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

  getCards(): void {
    this.requestService.viewRequests(this.query).subscribe(result => {
      this.requests = result;
    },
    err => {
      console.log(err);
      return false;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let change in changes){
      if (change == "query"){
        this.query = changes.query.currentValue;
      }
    }

    this.getCards();
  }

}
