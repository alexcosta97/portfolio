import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FeedEntry } from '../../models/feed-entry';
import { RssFeedService } from '../../services/rss-feed.service';

@Component({
  selector: 'rss-feed-page',
  templateUrl: './rss-feed-page.component.html',
  styleUrls: ['./rss-feed-page.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class RssFeedPageComponent implements OnInit {
  @Input() feedUrls!: string;
  @Input() maxItems?: number;
  feeds: Array<FeedEntry>;

  constructor(private rssService: RssFeedService) {
    this.feeds = new Array<FeedEntry>();
  }

  ngOnInit(): void {
    this.loadFeeds();
  }

  loadFeeds(): void {
    const urls = this.feedUrls.trim().split(',');

    urls.forEach((url, index) => {
      url = encodeURIComponent(url);
      this.rssService.getFeedContent(url).subscribe((feed) => {
        this.feeds = this.feeds.concat(feed.items);
        console.log(`Loaded Feeds from ${urls[index]}`);
      });
    });
  }
}
