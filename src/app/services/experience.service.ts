import { Injectable } from '@angular/core';
import { Experience } from '../shared/experience';
import { EXPERIENCELIST } from '../shared/experience-list';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() { }

  //Method that return array of experience-list
  //experience.service SUPPLIES experience-list js object array
  getExperienceList(): Experience[] {
    return EXPERIENCELIST;
  }
}

