import { Component, Input, OnChanges } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FeedbackService } from '../../services/feedback.service'
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnChanges {
  
  comment: String;
  comments: any;
  userId: string = this.authService.getUserId();

  @Input() page_id: String;
  @Input() page_name: String;
  @Input() page_type: String;

  constructor(
    private feedbackService:FeedbackService,
    private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private router: Router
  ) { }

  ngOnChanges() {
    this.getData();
  }

  getData() {
    if(this.page_type == "organisation"){
      this.feedbackService.viewFeedbackByTeam(this.page_id).subscribe(result => {
        this.comments = result.data;
        console.log(this.comments);
    },
    err => {
      console.log(err);
      return false;
    });
    }

    if(this.page_type == "place"){
      this.feedbackService.viewFeedbackByPlace(this.page_id).subscribe(result => {
        this.comments = result.data;
        console.log(this.comments);
    },
    err => {
      console.log(err);
      return false;
    });
    }
  }

  belongsToUser(feedbackUserId){
    if(feedbackUserId == this.userId){
      return true;
    }
  }

  // Add comment
  onFeedbackSubmit() {
    const feedback = {
	   comment: this.comment,
	   page_id: this.page_id,
	   page_name: this.page_name
    }

    this.feedbackService.addComment(feedback).subscribe(data => {
      if(data.success){
        this.getData();
      } else {
        this.flashMessage.show('We were unable to add your feedback.', {cssClass: 'alert-danger', timeout: 2000});
      }
  	});

  }

  // Delete comment
  onFeedbackDelete(feedbackId) {
    this.feedbackService.deleteFeedback(feedbackId).subscribe(data => {
      if(data.success){
        this.getData();
      } else {
        this.flashMessage.show('We were unable to delete your feedback.', {cssClass: 'alert-danger', timeout: 2000});
      }
    });
  }

}
