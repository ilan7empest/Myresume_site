import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'ts-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

@Injectable()
export class NavComponent {
  tsNav: boolean;

  constructor() { }

  sideNavBtnToggle() {
    if (this.tsNav == true) {
      this.tsNav = false;
    }
    else {
      this.tsNav = true;
    }
  }

}
