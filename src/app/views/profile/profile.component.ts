import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnChanges {
  user: any = {}
  posts: any = [];

  constructor(private api: NewsService) {
    this.getProfileInfo();
    api.getPost().subscribe((res:any) =>(this.posts = res.body.posts));
  }

  getProfileInfo(){
    this.api.getProfile().subscribe((res) => this.user = res.body);
  }

  ngOnChanges(): void {
      this.getProfileInfo();
  }
  
}
