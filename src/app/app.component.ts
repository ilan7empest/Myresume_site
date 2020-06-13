import { Component, OnInit, HostListener } from '@angular/core';
import { TemplateSelectorService } from './services/template-selector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
  
export class AppComponent implements OnInit {
  title = 'my-resume';

  ispro: boolean;

  constructor(private data: TemplateSelectorService) {}

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
    this.data.isPro.subscribe(ispro => this.ispro = ispro);
    this.storedTheme != null ? document.body.setAttribute('data-theme', this.storedTheme) : document.body.setAttribute('data-theme', 'light'); //set theme
    this.storedDirection == null ? document.querySelector('html').setAttribute('dir', "ltr") : document.querySelector('html').setAttribute('dir', this.storedDirection); //set language 
  }

  ngOnDestroy() {
    this.data.isPro.subscribe(ispro => this.ispro = ispro).unsubscribe();
  }


  // @HostListener("window:scroll", []) onWindowScroll() {
  //   const verticalOffset = window.pageYOffset
  //     || document.documentElement.scrollTop
  //     || document.body.scrollTop || 0;
    
    
  // }

  

}
