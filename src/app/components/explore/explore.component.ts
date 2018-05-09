import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { RequestService } from '../../services/request.service';
import { HttpParams } from '@angular/common/http'

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
	
  query: string = "";
  filter: string;

  private sub: any;
  id;

  constructor(
    private requestService:RequestService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit() {
    this.activatedRoute.queryParams
      .subscribe((params: Params) => {
        this.query = params['query'];
      });

  }
  
}
