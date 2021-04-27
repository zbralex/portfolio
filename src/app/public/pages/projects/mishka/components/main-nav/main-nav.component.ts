import { Component, OnInit } from '@angular/core';
import {IMenuItems} from "../../IMenuItems";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  menuItems: IMenuItems [] = [
    {path : "", name: "", className: "logo"},
    {path: "catalog", name: "Каталог товаров", className: "catalog"},
    {path: "form", name: "Вязание на заказ", className: "preorder"},
    {path: "search-result", name: "Поиск по сайту", className: "search"},
    {path: "basket", name: "Корзина: пока пуста", className: "basket"},
    {path: "latest", name: "Новые поступления", className: "latest"},
    {path: "sale", name: "Распродажа", className: "sale"},
    {path: "delivery", name: "Бесплатная доставка по России", className: "delivery"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
