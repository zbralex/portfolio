import { Component, OnInit } from '@angular/core';
import {PROJECTS} from "../../mock/projects-data";

@Component({
  selector: 'app-my-works',
  templateUrl: './my-works.component.html',
  styleUrls: ['./my-works.component.css']
})
export class MyWorksComponent implements OnInit {

  projects = PROJECTS

  constructor() { }

  ngOnInit(): void {
  }

}
