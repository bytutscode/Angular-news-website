import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Post } from 'src/app/models/post';
import { NewsService } from 'src/app/services/news.service';
import { SendEmailComponent } from 'src/app/shared/send-email/send-email.component';
import { SmallCardComponent } from './small-card/small-card.component';
import { MainCardComponent } from './main-card/main-card.component';
import { CommonModule } from '@angular/common';
import { Subscription, map, of, retry, tap } from 'rxjs';
import { LoaderAnimationComponent } from 'src/app/shared/loader-animation/loader-animation.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports:[
    SendEmailComponent,
    SmallCardComponent,
    MainCardComponent,
    LoaderAnimationComponent,
    CommonModule
  ]
})
export class HomeComponent implements OnInit, OnDestroy {

  posts: Post[] = [];

  mainPost: Post[] = [];
  mainPostBigCard: Post | undefined;

  popular: Post[] = [];

  latest: Post[] = [];
  latestBigCard: Post | undefined;

  loading = true;

  subscription: Subscription = new Subscription;

  constructor(private api: NewsService) {}

  ngOnInit(): void {
    this.subscription = this.api.getPostMain().pipe(
      retry(2),
      tap(()=>this.loading = false),
      map(e => this.success(e))).subscribe();
  }

  success(posts: any) {
    this.posts = this.handlePopular(posts);
    this.fillPosts();
  }

  errorResquest(err: any) {
    console.log(err)
  }

  handlePopular(response: any) {
    return response.map((post: any) => post.Post ? (post.Post) : post)
  }

  fillPosts() {
    this.mainPost = this.posts.filter((p: any, idx: number) => idx < 4);
    this.mainPostBigCard = this.mainPost.shift();
    this.popular = this.posts.filter((p: any, idx: number) => (idx < 7 && idx >= 4));
    this.latest = this.posts.filter((p: any, idx: number) => idx >= 7);
    this.latestBigCard = this.latest.shift()

    console.log(this.posts)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
