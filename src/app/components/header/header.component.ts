import { Component, OnInit } from '@angular/core';
import { TemplateSelectorService } from '../../services/template-selector.service';

@Component({
  selector: 'ts-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit  {
  // constructor(public NavComponent: NavComponent) { }

  ispro: boolean;

  constructor(private data: TemplateSelectorService) { }

  ngOnInit() {
    this.data.isPro.subscribe(ispro => this.ispro = ispro);
  }

}
