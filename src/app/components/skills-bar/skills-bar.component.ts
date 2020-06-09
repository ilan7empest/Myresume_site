import { Component, OnInit } from '@angular/core';
import { Skill } from '../../shared/skill';
import { SkillService } from '../../services/skill.service';

@Component({
  selector: 'app-skills-bar',
  templateUrl: './skills-bar.component.html',
  styleUrls: ['./skills-bar.component.scss']
})
export class SkillsBarComponent implements OnInit {
  skills: Skill[];

  constructor(
    private skillService: SkillService
  ) { }

  ngOnInit(): void {
    this.skills = this.skillService.getSkills();
  }
}
