import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MishkaComponent} from "../../mishka.component";
import {FormComponent} from "./form.component";


const routes: Routes = [
  {path: '', component: FormComponent},
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class FormModule { }
