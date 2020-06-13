import { Component, OnInit } from '@angular/core';
import { TemplateSelectorService } from '../../services/template-selector.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  ispro: boolean;

  constructor(private data: TemplateSelectorService) { }

  ngOnInit() {
    this.data.isPro.subscribe(ispro => this.ispro = ispro);
  }

}
