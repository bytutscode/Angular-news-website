import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBarMenuComponent } from './nav-bar/nav-bar-menu/nav-bar-menu.component';
import { NavBarSearchComponent } from './nav-bar/nav-bar-search/nav-bar-search.component';
import { NavBarSocialsComponent } from './nav-bar/nav-bar-socials/nav-bar-socials.component';



@NgModule({
  declarations: [
    NavBarComponent,
    NavBarMenuComponent,
    NavBarSearchComponent,
    NavBarSocialsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavBarComponent
  ]
})
export class SharedModule { }
