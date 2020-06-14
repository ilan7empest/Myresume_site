import { Injectable } from '@angular/core';
import { Education } from '../shared/education';
import { EDUCATIONLIST } from '../shared/education-list';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor() { }

  getEducationList(): Education[] {
    return EDUCATIONLIST;
  }
}
