import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PromoHitComponent} from "../../components/promo-hit/promo-hit.component";
import {AddToCartComponent} from "../../components/add-to-cart/add-to-cart.component";
import {AboutCompanyComponent} from "../../components/about-company/about-company.component";
import {ReviewsComponent} from "../../components/reviews/reviews.component";
import {ContactsComponent} from "../../components/contacts/contacts.component";
import {FeedbackComponent} from "../../components/feedback/feedback.component";
import {MainNavComponent} from "../../components/main-nav/main-nav.component";
import {RouterModule} from "@angular/router";
import {CatalogNavComponent} from "../../components/catalog-nav/catalog-nav.component";



@NgModule({
  declarations: [CatalogNavComponent],
  exports: [],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class MainModule { }
