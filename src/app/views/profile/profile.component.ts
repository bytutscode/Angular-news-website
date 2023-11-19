import { Component } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  username = '';
  bucketUrl : string = 'https://f004.backblazeb2.com/file/blogsBucket/';
  photo : string = '';
  banner : string = '';
  posts: any= [];

  constructor(private api: NewsService){
    
    api.getProfile().subscribe({
      next:(res: any)=>{
        this.photo =this.bucketUrl + res.body.profile_photo
        this.banner =this.bucketUrl + res.body.banner_photo
        this.username = res.body.name;
      },
      error:(err)=>{
        console.log(err)
      }
    })
     
    api.getPost().subscribe(posts =>{
      this.posts = posts.body;
    })
  }

}
