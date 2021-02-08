import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {MishkaComponent} from './pages/projects/mishka/mishka.component';
import {SedonaComponent} from './pages/projects/sedona/sedona.component';
import {AffinageComponent} from './pages/projects/affinage/affinage.component';


const routes: Routes = [
  {
    path: '', loadChildren: () => import('./pages/projects/projects.module').then(m => m.ProjectsModule)
  }
]

@NgModule({
  declarations: [MishkaComponent, SedonaComponent, AffinageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PublicModule {
}
