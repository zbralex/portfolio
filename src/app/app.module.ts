import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './public/pages/main-page/main-page.component';
import { SkillsComponent } from './public/components/skills/skills.component';
import { HeaderComponent } from './public/components/header/header.component';
import { AboutComponent } from './public/components/about/about.component';
import { SocialsComponent } from './public/components/socials/socials.component';
import { MyWorksComponent } from './public/components/my-works/my-works.component';
import { FooterComponent } from './public/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SkillsComponent,
    HeaderComponent,
    AboutComponent,
    SocialsComponent,
    MyWorksComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
