import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-resume';
  storedTheme: string = localStorage.getItem('theme-color');
  storedDirection: string = localStorage.getItem('dir');


  ngOnInit() {
    this.storedTheme != null ? document.body.setAttribute('data-theme', this.storedTheme) : document.body.setAttribute('data-theme', 'light'); //set theme
    this.storedDirection == null ? document.querySelector('html').setAttribute('dir', "ltr") : document.querySelector('html').setAttribute('dir', this.storedDirection); //set language 
  }

}
