import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './views/home/home.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileModule } from './views/profile/profile.module';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { CreatePostComponent } from './views/create-post/create-post.component';
import { CategoryViewComponent } from './views/category-view/category-view.component';
import { ShowMoreBtnComponent } from './views/category-view/show-more-btn/show-more-btn.component';
import { PipesModule } from './pipes/pipes.module';
import { ArticleModule } from './views/article/article.module';
import { SearchComponent } from './views/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    CreatePostComponent,
    CategoryViewComponent,
    ShowMoreBtnComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    FormsModule,
    HttpClientModule,
    ProfileModule,
    ArticleModule,
    PipesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
