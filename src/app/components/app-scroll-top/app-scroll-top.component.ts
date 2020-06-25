import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'ts-scroll-top',
  templateUrl: './app-scroll-top.component.html',
  styleUrls: ['./app-scroll-top.component.scss']
})
export class AppScrollTopComponent implements OnInit {
  windowScrolled: boolean;
  // constructor(@Inject(DOCUMENT) private document: Document) {}
  @HostListener("window:scroll", [])
    
  onWindowScroll() {
    if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
      this.windowScrolled = true;
    } else {
      this.windowScrolled = false;
    }
  }
  scrollToTop() {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 50); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 10);
  }

  ngOnInit() { }
}
