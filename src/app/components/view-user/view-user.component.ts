import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute, Params, Router }   from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  user: Object;
  private sub: any;
  id: string;


  constructor(
  	private authService:AuthService,
    private flashMessage:FlashMessagesService,
    private route: ActivatedRoute,
  	private router:Router
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id']; 
    });
    console.log(this.id);
    this.getUser(this.id);
  }

  getUser(id): void {
    this.authService.getUserById(id).subscribe(result => {
      this.user = result.user;
    },
    err => {
      console.log(err);
      return false;
    });
  }


}
