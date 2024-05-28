import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { authGuard } from './guards/auth.guard';
import { guestGuard } from './guards/guest.guard';


const routes: Routes = [
  { path: '', pathMatch:'full', component: HomeComponent },
  { path: 'signup', loadComponent: ()=> import('../app/views/sign-up/sign-up.component').then(c =>c.SignUpComponent) , canActivate:[guestGuard]},
  { path: 'signin', loadComponent:()=> import('../app/views/sign-in/sign-in.component').then(c =>c.SignInComponent), canActivate:[guestGuard]  },
  { path: 'create', loadComponent:()=> import('../app/views/create-post/create-post.component').then(c =>c.CreatePostComponent), canActivate: [authGuard] },
  { path: 'article/:id', loadComponent:()=> import('../app/views/article/article.component').then(c=>c.ArticleComponent) },
  { path: 'profile', loadComponent:()=> import('../app/views/profile/profile.component').then(c => c.ProfileComponent), canActivate: [authGuard] },
  { path: 'profile/update', loadComponent:()=> import('../app/views/profile/update-profile/update-profile.component').then(c=>c.UpdateProfileComponent), canActivate: [authGuard] },
  { path: 'profile/:id', loadComponent:()=> import('../app/views/profile/profile.component').then(c => c.ProfileComponent) },
  { path: 'category/:category', loadComponent:()=> import('../app/views/category-view/category-view.component').then(c => c.CategoryViewComponent) },
  { path: 'search', loadComponent:()=> import('../app/views/search/search.component').then(c => c.SearchComponent) },
  {path:'**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
