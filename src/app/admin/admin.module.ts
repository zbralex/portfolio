import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "./services/auth.service";
import {Route, RouterModule, Routes} from "@angular/router";
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { LoginComponent } from './pages/login/login.component';

import {MaterialModule} from "./material/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import { AdminToolbarComponent } from './admin-toolbar/admin-toolbar.component';
import {AuthGuard} from "./services/auth.guard";

const childRoutes: Routes = [
  {path: '', redirectTo: 'admin', pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent}
]
const routes: Routes = [
  {path: '', component: AdminLayoutComponent, children: childRoutes}
]
@NgModule({
  declarations: [ AdminLayoutComponent, LoginComponent, AdminToolbarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuard]
})
export class AdminModule { }
