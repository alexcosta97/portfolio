import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { HomeComponent } from './components/home/home.component';
import { InConstructionPageComponent } from './components/in-construction-page/in-construction-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'projects', component: InConstructionPageComponent },
  { path: 'contact', component: InConstructionPageComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
