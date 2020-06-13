import { Component, OnInit } from '@angular/core';
import { Experience } from '../../shared/experience';
import { ExperienceService } from '../../services/experience.service';
import { TemplateSelectorService } from '../../services/template-selector.service';

@Component({
  selector: 'app-experience-bar',
  templateUrl: './experience-bar.component.html',
  styleUrls: ['./experience-bar.component.scss']
})
export class ExperienceBarComponent implements OnInit {

  experienceList: Experience[];
  ispro: boolean;

  constructor(
    private experienceService: ExperienceService,
    private data: TemplateSelectorService
  ) { }

  

  ngOnInit(): void {
    this.experienceList = this.experienceService.getExperienceList();
    this.data.isPro.subscribe(ispro => this.ispro = ispro);
  }

}
