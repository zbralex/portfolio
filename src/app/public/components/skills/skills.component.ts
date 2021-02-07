import { Component, OnInit } from '@angular/core';
import {SKILLS} from './../../mock/skills-data';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills = SKILLS

  constructor() { }

  ngOnInit(): void {
  }

}
