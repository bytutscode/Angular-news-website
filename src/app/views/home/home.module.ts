import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MainCardComponent } from './main-card/main-card.component';
import { SmallCardComponent } from './small-card/small-card.component';



@NgModule({
  declarations: [
    HomeComponent,
    MainCardComponent,
    SmallCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
