import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RssReaderModule } from './rss-reader/rss-reader.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PageNotFoundComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    RssReaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
