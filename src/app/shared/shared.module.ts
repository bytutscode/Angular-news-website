import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBarMenuComponent } from './nav-bar/nav-bar-menu/nav-bar-menu.component';
import { NavBarSearchComponent } from './nav-bar/nav-bar-search/nav-bar-search.component';
import { NavBarSocialsComponent } from './nav-bar/nav-bar-socials/nav-bar-socials.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoaderAnimationComponent } from './loader-animation/loader-animation.component';
import { UserCardComponent } from './user-card/user-card.component';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    NavBarComponent,
    NavBarMenuComponent,
    NavBarSearchComponent,
    NavBarSocialsComponent,
    SendEmailComponent,
    FooterComponent,
    LoaderAnimationComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    PipesModule
  ],
  exports:[
    NavBarComponent,
    SendEmailComponent,
    FooterComponent,
    UserCardComponent
  ]
})
export class SharedModule { }
