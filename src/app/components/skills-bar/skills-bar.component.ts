import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-bar',
  templateUrl: './skills-bar.component.html',
  styleUrls: ['./skills-bar.component.scss']
})
export class SkillsBarComponent implements OnInit {
  name: any;
  width: any;

  constructor() { }

  ngOnInit(): void {
    this.name = 'HTML';
    this.width = 45;
  }

}
