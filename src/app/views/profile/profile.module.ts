import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { BannerComponent } from './banner/banner.component';
import { ProfilePhotoComponent } from './profile-photo/profile-photo.component';
import { HomeModule } from '../home/home.module';
import { UpdateBtnComponent } from './update-btn/update-btn.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProfileComponent,
    BannerComponent,
    ProfilePhotoComponent,
    UpdateBtnComponent,
    UpdateProfileComponent,
  ],
  imports: [
    CommonModule,
    HomeModule,
    FormsModule
  ]
})
export class ProfileModule { }
