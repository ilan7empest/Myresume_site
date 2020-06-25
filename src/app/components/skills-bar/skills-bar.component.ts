import { Component, OnInit } from '@angular/core';
import { Skill } from '../../shared/skill';
import { SkillService } from '../../services/skill.service';
import { TemplateSelectorService } from '../../services/template-selector.service';

@Component({
  selector: 'app-skills-bar',
  templateUrl: './skills-bar.component.html',
  styleUrls: ['./skills-bar.component.scss']
})
export class SkillsBarComponent implements OnInit {
  ispro: boolean;
  skills: Skill[];

  constructor(
    private skillService: SkillService,
    private data: TemplateSelectorService
  ) { }

  ngOnInit(): void {
    this.skills = this.skillService.getSkills();
    this.data.isPro.subscribe(ispro => this.ispro = ispro);
  }
}
