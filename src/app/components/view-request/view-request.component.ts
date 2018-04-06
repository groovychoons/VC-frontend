import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params }   from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { RequestService } from '../../services/request.service'

@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css']
})
export class ViewRequestComponent implements OnInit {

  request: Object;
  user: Object;
  private sub: any;
  id: string;

  constructor(
    private requestService:RequestService,
    private flashMessage:FlashMessagesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id']; 
    });
    console.log(this.id);
    this.getRequest(this.id);
  }

  getRequest(id): void {
  	this.requestService.viewRequest(id).subscribe(result => {
  	  this.request = result.request;
      console.log(this.request);
  	},
  	err => {
      console.log(err);
      return false;
    });
  }

  // Delete request
  onDelete() {
    this.requestService.deleteRequest(this.id).subscribe(data => {
      if(data.success){
        this.flashMessage.show('Your request has been deleted', {cssClass: 'alert-success', timeout: 4000});
        this.router.navigate(['/dashboard']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
      }
    });
  }


}
