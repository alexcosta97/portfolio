import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RssFeedComponent } from './components/rss-feed/rss-feed.component';
import { HttpClientModule } from '@angular/common/http';
import { RssFeedTitleListComponent } from './components/rss-feed-title-list/rss-feed-title-list.component';



@NgModule({
  declarations: [
    RssFeedComponent,
    RssFeedTitleListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    RssFeedTitleListComponent
  ]
})
export class RssReaderModule { }
