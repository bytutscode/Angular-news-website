import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ArticleComponent } from './views/article/article.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { authGuard } from './guards/auth.guard';
import { UpdateProfileComponent } from './views/profile/update-profile/update-profile.component';
import { CreatePostComponent } from './views/create-post/create-post.component';
import { CategoryViewComponent } from './views/category-view/category-view.component';
import { SearchComponent } from './views/search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'create', component: CreatePostComponent, canActivate: [authGuard] },
  { path: 'article/:id', component: ArticleComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
  { path: 'profile/update', component: UpdateProfileComponent, canActivate: [authGuard] },
  { path: 'category/:category', component: CategoryViewComponent},
  { path: 'search', component: SearchComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
