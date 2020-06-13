import { Component, OnInit } from '@angular/core';
import { TemplateSelectorService } from '../../services/template-selector.service';

@Component({
  selector: 'theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})

export class ThemePickerComponent implements OnInit {

  ispro: boolean;

  constructor(private data: TemplateSelectorService) { }

  themeMenuOpen = false;
  toggleMain() {
    this.themeMenuOpen = !this.themeMenuOpen;
  }

  ngOnInit() {
    this.data.isPro.subscribe(ispro => this.ispro = ispro);
  }

  toggleTheme(theme: any) {
    this.themeMenuOpen = false;

    localStorage.setItem('theme-color', theme);
    document.body.setAttribute('data-theme', theme);
  }

  themeList: any[] = [
    {
      theme: "light"
    },
    {
      theme: "pink"
    },
    {
      theme: "dark"
    }
  ];

}
