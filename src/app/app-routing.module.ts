import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectPageComponent } from './project-page/project-page.component';

const routes: Routes = [
  { path: ':lang', component: LandingPageComponent },
  { path: ':lang/project-list', component: ProjectListComponent },
  { path: ':lang/project/:id', component: ProjectPageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
