import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MainCardComponent } from './main-card/main-card.component';
import { SmallCardComponent } from './small-card/small-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [
    HomeComponent,
    MainCardComponent,
    SmallCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    PipesModule
  ],
  exports:[
    SmallCardComponent,
    MainCardComponent
  ]
})
export class HomeModule { }
