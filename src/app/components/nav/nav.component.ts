import { Component, OnInit, Injectable } from '@angular/core';
import { TemplateSelectorService } from '../../services/template-selector.service';

@Component({
  selector: 'ts-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

@Injectable()
export class NavComponent implements OnInit {
  tsNav: boolean;

  ispro: boolean;

  constructor(private data: TemplateSelectorService) { }

  ngOnInit() {
    this.data.isPro.subscribe(ispro => this.ispro = ispro);
  }

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
