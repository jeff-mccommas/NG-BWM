import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { RentalListComponent } from "../rental-list/rental-list.component";
import { RentalListItemComponent } from "../rental-list-item/rental-list-item.component";
import { RentalComponent } from "../rental.component";
import { RentalService } from "./rental.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RentailDetailComponent } from "../rentail-detail/rentail-detail.component";
import { HttpClientModule } from "@angular/common/http";
import { NgPipesModule } from "ngx-pipes";
export const routes: Routes = [
  {
    path: "rentals",
    component: RentalComponent,
    children: [
      { path: "", component: RentalListComponent },
      { path: ":rentalId", component: RentailDetailComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgPipesModule,

    RouterModule.forChild(routes)
  ],
  providers: [RentalService],
  declarations: [
    RentalListComponent,
    RentalListItemComponent,
    RentailDetailComponent,
    RentalComponent
  ]
})
export class RentalModule {}
