import { Component, Injectable, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'ts-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

@Injectable()
export class NavComponent {
  tsNav: boolean;

  constructor() { }

  onClick(id: any): void {
    const el: HTMLElement | null = document.getElementById(id);
    if (el) {
      setTimeout(() =>
        el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' }), 0);
    } 
    this.tsNav = false;
  }

  sideNavBtnToggle() {
    if (this.tsNav == true) {
      this.tsNav = false;
    }
    else {
      this.tsNav = true;
    }
  }

}
