import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { FormComponent } from './pages/form/form.component';
import {MishkaComponent} from "./mishka.component";
import { MainComponent } from './pages/main/main.component';
import {MainNavComponent} from "./components/main-nav/main-nav.component";
import {PromoHitComponent} from "./components/promo-hit/promo-hit.component";
import {AddToCartComponent} from "./components/add-to-cart/add-to-cart.component";


const childRoutes: Routes = [
  { path: '', component: MainComponent},
  { path: 'form', component: FormComponent}
];
const routes: Routes = [
  {path: '', component: MishkaComponent, children: childRoutes},
]

@NgModule({
  declarations: [
    MainComponent,
    PromoHitComponent,
    AddToCartComponent,
    MainNavComponent
  ],
  exports: [
    MainNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class MishkaModule { }