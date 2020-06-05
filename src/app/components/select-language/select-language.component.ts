import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.scss']
})
  
export class SelectLanguageComponent {
  constructor(public translate: TranslateService) { }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  langDirection: string;
  setDirection(lang) {
    lang == "en" ? this.langDirection = "ltr" : this.langDirection = "rtl";
    document.querySelector('html').setAttribute('dir', this.langDirection);
    localStorage.setItem('dir', this.langDirection);
  }
}