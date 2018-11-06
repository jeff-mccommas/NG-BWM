import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { Routes, RouterModule } from "@angular/router";
import { RentalModule } from "./rental/shared/rental.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

const routes: Routes = [
  { path: "", redirectTo: "/rentals", pathMatch: "full" }
];

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,

    BrowserAnimationsModule,

    RouterModule.forRoot(routes),
    RentalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
