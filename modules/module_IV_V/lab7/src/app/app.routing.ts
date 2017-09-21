import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {PageOneComponent} from "./page-one/page-one.component";
import {PageTwoComponent} from "./page-two/page-two.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component:  HomeComponent},
  { path: 'about',  component:  AboutComponent},
  { path: 'page-one', component: PageOneComponent },
  { path: 'page-two', component: PageTwoComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}