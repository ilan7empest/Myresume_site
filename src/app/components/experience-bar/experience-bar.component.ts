import { Component, OnInit } from '@angular/core';
import { Experience } from '../../shared/experience';
import { ExperienceService } from '../../services/experience.service';

@Component({
  selector: 'app-experience-bar',
  templateUrl: './experience-bar.component.html',
  styleUrls: ['./experience-bar.component.scss']
})
export class ExperienceBarComponent implements OnInit {

  experienceList: Experience[];

  constructor(
    private experienceService: ExperienceService
  ) { }

  

  ngOnInit(): void {
    this.experienceList = this.experienceService.getExperienceList();
  }

}
