import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonationAddComponent } from './donation-add/donation-add.component';
import { DonationListComponent } from './donation-list/donation-list.component';
import { DonationMenuComponent } from './donation-menu/donation-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    DonationAddComponent,
    DonationListComponent,
    DonationMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
