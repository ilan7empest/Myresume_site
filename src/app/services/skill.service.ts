import { Injectable } from '@angular/core';
import { Skill } from '../shared/skill';
import { SKILLS } from '../shared/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor() { }

  //Method that return array of skills 
  //skill.service SUPPLIES skills js object array
  getSkills(): Skill[] {
    return SKILLS;
  }
}

