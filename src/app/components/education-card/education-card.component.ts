import { Component, OnInit } from '@angular/core';
import { Education } from '../../shared/education';
import { EducationService } from '../../services/education.service';
import { TemplateSelectorService } from '../../services/template-selector.service';


@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.scss']
})
export class EducationCardComponent implements OnInit {

  educationList: Education[];
  ispro: boolean;

  constructor(
    private educationService: EducationService,
    private data: TemplateSelectorService
  ) { }



  ngOnInit(): void {
    this.educationList = this.educationService.getEducationList();
    this.data.isPro.subscribe(ispro => this.ispro = ispro);
  }

}
