import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// import third-party module
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { NgScrollbarModule } from 'ngx-scrollbar';

// ********************** angular-modal-gallery *****************************
import 'hammerjs'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save hammerjs`)
import 'mousetrap'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save mousetrap`)
import { GalleryModule } from '@ks89/angular-modal-gallery'; // <----------------- angular-modal-gallery library import


import { TemplateSelectorService } from './services/template-selector.service';


import { AppComponent } from './app.component';
import { I18nModule } from './i18n/i18n.module';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppScrollTopComponent } from './components/app-scroll-top/app-scroll-top.component';
import { SelectLanguageComponent } from './components/select-language/select-language.component';
import { ThemePickerComponent } from './components/theme-picker/theme-picker.component';
import { HomeComponent } from './routing/home/home.component';
import { SkillsComponent } from './routing/skills/skills.component';
import { ExperienceComponent } from './routing/experience/experience.component';
import { ContactComponent } from './routing/contact/contact.component';
import { AboutComponent } from './routing/about/about.component';
import { SkillsBarComponent } from './components/skills-bar/skills-bar.component';
import { ExperienceBarComponent } from './components/experience-bar/experience-bar.component';
import { TemplateSelectorComponent } from './components/template-selector/template-selector.component';
import { EducationCardComponent } from './components/education-card/education-card.component';
import { GalleryModalComponent } from './components/gallery-modal/gallery-modal.component';
import { ProjectsComponent } from './routing/projects/projects.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    AppScrollTopComponent,
    SelectLanguageComponent,
    ThemePickerComponent,
    HomeComponent,
    SkillsComponent,
    ExperienceComponent,
    ContactComponent,
    AboutComponent,
    SkillsBarComponent,
    ExperienceBarComponent,
    TemplateSelectorComponent,
    EducationCardComponent,
    GalleryModalComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    I18nModule,
    NgScrollbarModule,
    GalleryModule.forRoot(),
    AnimateOnScrollModule.forRoot()
  ],
  providers: [TemplateSelectorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
