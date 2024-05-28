import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, catchError, map, retry,  tap } from 'rxjs';
import { User } from 'src/app/models/User';
import { Post } from 'src/app/models/post';
import { NewsService } from 'src/app/services/news.service';
import { BannerComponent } from './banner/banner.component';
import { SmallCardComponent } from '../home/small-card/small-card.component';
import { ProfilePhotoComponent } from './profile-photo/profile-photo.component';
import { UpdateBtnComponent } from './update-btn/update-btn.component';
import { LoaderAnimationComponent } from 'src/app/shared/loader-animation/loader-animation.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone:true,
  imports:[
    CommonModule,
    BannerComponent,
    SmallCardComponent,
    ProfilePhotoComponent,
    UpdateBtnComponent,
    LoaderAnimationComponent
  ]
})
export class ProfileComponent implements OnInit {
  user$: Observable<User | null> = of(null);
  posts$: Observable<Post[] | null> = of(null);
  userID: string | null = null;
  myProfile: boolean = true;
  userStoraged = JSON.parse(localStorage.getItem('user') as string);
  loading: boolean = true;

  // private reloadUserSubject = new Subject<void>();

  constructor(private api: NewsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userID = this.route.snapshot.paramMap.get('id');
    const id = this.userID ? this.userID : this.userStoraged.id;

    this.user$ = this.api.getProfile(id).pipe(
        retry(2),
        catchError(e => of(null)),
        map(user => user),
        tap(() => this.loading = false)
      );

    this.posts$ = this.api.getPost(id).pipe(
        retry(2),
        catchError(e => of(null)),
        map((p: any) => p.posts),
        tap(() => this.loading = false)
      );

    
    if (!this.userStoraged) {
      this.myProfile = false;
    } else if (this.userID && this.userStoraged.id != this.userID) {
      this.myProfile = false;
    }
  }

  reload(): void {
    this.loading = true;
    this.ngOnInit();
  }

 
  
}
