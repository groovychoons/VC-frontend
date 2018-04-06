import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:Object;

  constructor(
  	private authService:AuthService,
    private flashMessage:FlashMessagesService,
  	private router:Router
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile;
    },
    err => {
      console.log(err);
      return false;
    });
  }

  // Delete Account
  onDelete() {
    this.authService.deleteUser().subscribe(data => {
      if(data.success){
        this.flashMessage.show('Your account has been deleted', {cssClass: 'alert-success', timeout: 4000});
        this.authService.logout();
        this.router.navigate(['/']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
      }
    });
  }


}
