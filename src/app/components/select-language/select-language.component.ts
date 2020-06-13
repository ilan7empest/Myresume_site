import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TemplateSelectorService } from '../../services/template-selector.service';

@Component({
  selector: 'select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.scss']
})
  
export class SelectLanguageComponent implements OnInit{

  ispro: boolean;
  constructor(public translate: TranslateService, private data: TemplateSelectorService) { }

  ngOnInit() {
    this.data.isPro.subscribe(ispro => this.ispro = ispro);
  }

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