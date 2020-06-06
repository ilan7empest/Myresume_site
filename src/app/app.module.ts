import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


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
import { GalleryComponent } from './routing/gallery/gallery.component';
import { AboutComponent } from './routing/about/about.component';
import { SkillsBarComponent } from './components/skills-bar/skills-bar.component';

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
    GalleryComponent,
    AboutComponent,
    SkillsBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    I18nModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
