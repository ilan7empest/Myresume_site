import { Component } from '@angular/core';

@Component({
  selector: 'theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})

export class ThemePickerComponent {

  constructor(
  ) { }

  themeMenuOpen = false;
  toggleMain() {
    this.themeMenuOpen = !this.themeMenuOpen;
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
