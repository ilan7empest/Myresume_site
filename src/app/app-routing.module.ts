import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routing/home/home.component';
import { AboutComponent } from './routing/about/about.component';
import { ExperienceComponent } from './routing/experience/experience.component';
import { SkillsComponent } from './routing/skills/skills.component';
import { ContactComponent } from './routing/contact/contact.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
