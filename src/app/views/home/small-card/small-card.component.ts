import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
  standalone: true,
  imports:[
    CommonModule,
    PipesModule,
    RouterModule
  ]
})
export class SmallCardComponent {
  @Input() post: Post | undefined;
  @Input() myProfile: boolean = false;
  visible: boolean = true;
  showOption: boolean = false;
  constructor(private api: NewsService) {

  }

  toggleOptions() {
    this.showOption = !(!!this.showOption);
  }

  deletePost(id: string | number) {
    this.api.deletePostById(id).subscribe({
      next: (res) => {
        this.visible = false;
      },
      error(err) {
        console.log(err);

        alert('There was an error while deleting your post')
      }
    })
  }
}
