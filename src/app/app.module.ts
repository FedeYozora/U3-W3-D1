import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FavoritedProductsComponent } from './favorited-products/favorited-products.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'favorite-products', component: FavoritedProductsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FavoritedProductsComponent,
    NavBarComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, HttpClientModule, [RouterModule.forRoot(routes)]],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
