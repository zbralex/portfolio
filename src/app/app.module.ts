

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './public/pages/main-page/main-page.component';
import { HeaderComponent } from './public/components/header/header.component';
import { AboutComponent } from './public/components/about/about.component';
import { SocialsComponent } from './public/components/socials/socials.component';
import { MyWorksComponent } from './public/components/my-works/my-works.component';
import { FooterComponent } from './public/components/footer/footer.component';
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    AboutComponent,
    SocialsComponent,
    MyWorksComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
