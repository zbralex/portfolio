import { Component, OnInit } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Главная | Портфолио')
    this.meta.updateTag({
      name: 'description',
      content: 'Александр Зубрицкий. Главная страница портфолио. Junior Front-end developer'
    })
  }

}
