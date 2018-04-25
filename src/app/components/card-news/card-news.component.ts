import { Component, OnInit } from '@angular/core';
import { AysBlogService } from '../../services/ays-blog.service'

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.css']
})
export class CardNewsComponent implements OnInit {
  
  feed;
  private feeds: any;

  constructor(
      private aysBlogService: AysBlogService
  ) { }

  ngOnInit() {
        this.refreshFeed();
  }

  private refreshFeed() {
    this.aysBlogService.getFeedContent()
        .subscribe(
            feed => this.feeds = feed.items,
            error => console.log(error));
  }


  openLinkInBrowser() {
    window.open(this.feed.link);
  }
}
