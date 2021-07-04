import { Component, OnInit, Input } from '@angular/core';
import { FeedEntry } from '../../models/feed-entry';
import { RssFeedService } from '../../services/rss-feed.service';

@Component({
  selector: 'app-rss-feed',
  templateUrl: './rss-feed.component.html',
  styleUrls: ['./rss-feed.component.css'],
})
export class RssFeedComponent implements OnInit {
  @Input() feedUrls!: string;
  @Input() isTitleList!: boolean;
  feeds: Array<FeedEntry>;

  constructor(private rssService: RssFeedService) {
    this.feeds = new Array<FeedEntry>();
  }

  ngOnInit(): void {
    console.log('Started component.');
    this.loadFeeds();
  }

  loadFeeds(): void {
    const urls = this.feedUrls.trim().split(',');

    urls.forEach((url) => {
      url = encodeURIComponent(url);
      this.rssService.getFeedContent(url).subscribe((feed) => {
        this.feeds = this.feeds.concat(feed.items);
        console.log(feed.items);
      });
    });
  }
}
