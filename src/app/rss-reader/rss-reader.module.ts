import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RssFeedComponent } from './components/rss-feed/rss-feed.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    RssFeedComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    RssFeedComponent
  ]
})
export class RssReaderModule { }
