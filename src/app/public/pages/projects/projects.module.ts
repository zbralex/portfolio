import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MishkaComponent} from "./mishka/mishka.component";
import {SedonaComponent} from "./sedona/sedona.component";
import {AffinageComponent} from "./affinage/affinage.component";

const routes: Routes = [
  {path: 'mishka', component: MishkaComponent},
  {path: 'sedona', component: SedonaComponent},
  {path: 'affinage', component: AffinageComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProjectsModule { }
