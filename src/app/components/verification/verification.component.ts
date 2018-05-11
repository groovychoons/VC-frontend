import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  constructor(
    private flashMessage:FlashMessagesService
   ) { }

  ngOnInit() {
  }

  onConfirm() {
    this.flashMessage.show('Your details have been sent.', {cssClass: 'alert-success', timeout: 4000});

  }
}
