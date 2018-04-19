import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
	
  searchParams: string;

  constructor(
    private requestService:RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit() {

  }

  doSearch(){
  	this.router.navigate(['/explore'], { queryParams: { title: this.searchParams } });

  	
  }
}
