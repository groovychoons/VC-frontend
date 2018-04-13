import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { RequestService } from '../../services/request.service'

@Component({
  selector: 'app-view-req-as-owner',
  templateUrl: './view-req-as-owner.component.html',
  styleUrls: ['./view-req-as-owner.component.css']
})
export class ViewReqAsOwnerComponent implements OnInit {
  request: Object;
  user: Object;
  private sub: any;
  id: string;
  pageMode : string;

  requestPrior: Object;

  constructor(
    private requestService:RequestService,
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
    this.getRequest(this.id);

    this.requestPrior = new Object();
  }

  getRequest(id): void {
  	this.requestService.viewRequest(id).subscribe(result => {
  	  this.request = result.request;
      this.requestPrior = result.request;
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
