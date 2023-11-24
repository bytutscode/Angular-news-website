import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  posts: Post[] = [];

  mainPost: Post[] = [];
  mainPostBigCard: Post | undefined;

  popular: Post[] = [];

  latest: Post[] = [];
  latestBigCard: Post | undefined;

  cases: any = { next:(res:any)=>this.success(res), error: this.errorResquest };

  constructor(private api: NewsService) {
    api.getPostMain().subscribe(this.cases)
  }

  success(res: any) {
    this.posts = this.handlePopular(res.body);
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
  }

}
