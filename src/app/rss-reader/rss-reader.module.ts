import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RssFeedTitleListComponent } from './components/rss-feed-title-list/rss-feed-title-list.component';
import { StripHtmlPipe } from './pipes/strip-html.pipe';
import { RssFeedPageComponent } from './components/rss-feed-page/rss-feed-page.component';



@NgModule({
  declarations: [
    RssFeedTitleListComponent,
    StripHtmlPipe,
    RssFeedPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    RssFeedTitleListComponent,
    RssFeedPageComponent
  ]
})
export class RssReaderModule { }
