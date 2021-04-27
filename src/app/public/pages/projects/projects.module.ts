import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MishkaComponent} from "./mishka/mishka.component";
import {SedonaComponent} from "./sedona/sedona.component";
import {AffinageComponent} from "./affinage/affinage.component";
import {MishkaModule} from "./mishka/mishka.module";


const routes: Routes = [
  {path: 'mishka', component: MishkaComponent, loadChildren: () => import('./mishka/mishka.module').then(m => m.MishkaModule)},
  {path: 'sedona', component: SedonaComponent},
  {path: 'affinage', component: AffinageComponent}
]

@NgModule({
  declarations: [SedonaComponent, AffinageComponent],
  exports: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MishkaModule
  ]
})
export class ProjectsModule { }
