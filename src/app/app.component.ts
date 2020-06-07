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

  onActivate(event) {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }

  ngOnInit() {
    this.storedTheme != null ? document.body.setAttribute('data-theme', this.storedTheme) : document.body.setAttribute('data-theme', 'light'); //set theme
    this.storedDirection == null ? document.querySelector('html').setAttribute('dir', "ltr") : document.querySelector('html').setAttribute('dir', this.storedDirection); //set language 
  }

}
