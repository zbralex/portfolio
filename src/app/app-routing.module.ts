import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from "./public/pages/main-page/main-page.component";

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule )
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
