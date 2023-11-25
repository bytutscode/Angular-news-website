import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{
  user: any = {}
  posts: any = [];
  userID: string | null;
  userStoraged = JSON.parse(localStorage.getItem('user') as string);

  constructor(private api: NewsService, private route: ActivatedRoute) {
    this.userID = this.route.snapshot.paramMap.get('id');
    this.userID ? this.getProfileInfo(this.userID) : this.getProfileInfo(this.userStoraged.id);
    this.userID ? this.getPosts(this.userID) : this.getPosts(this.userStoraged.id);
  }

  getProfileInfo(id: number | string) {
    this.api.getProfile(id).subscribe((res) => this.user = res.body);
  }

  getPosts(id: number | string) {
    this.api.getPost(id).subscribe((res: any) => (this.posts = res.body.posts));
  }


}
