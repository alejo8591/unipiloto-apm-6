import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from "./app.routing";
import {APP_BASE_HREF} from "@angular/common";

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    PageOneComponent,
    PageTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [{
      provide: APP_BASE_HREF, useValue : '/'
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
