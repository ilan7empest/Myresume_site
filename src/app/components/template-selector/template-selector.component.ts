import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TemplateSelectorService } from '../../services/template-selector.service';

@Component({
  selector: 'app-template-selector',
  templateUrl: './template-selector.component.html',
  styleUrls: ['./template-selector.component.scss']
})
export class TemplateSelectorComponent implements OnInit {

  ispro: boolean;

  constructor(
    private data: TemplateSelectorService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.data.isPro.subscribe(ispro => this.ispro = ispro);
  }

  ngAfterViewInit() {
    let storedIsPro: string = localStorage.getItem('ispro');
    let isProBoolean = JSON.parse(storedIsPro);
    setTimeout(() => {
      this.data.changeTemplate(isProBoolean);
      this.cdRef.detectChanges();
    });    
  }

  setValue(value) {
    this.data.changeTemplate(value);
    localStorage.setItem('ispro', value);
  }
}
