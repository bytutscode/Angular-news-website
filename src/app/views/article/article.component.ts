import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  idParam: number = 0;
  article: Post | undefined = undefined;
  
  constructor(route: ActivatedRoute, api: NewsService) {
      this.idParam = Number(route.snapshot.paramMap.get('id'));
      api.getPostById(this.idParam).subscribe({next:(res:any)=>{this.article = res.body;}});
  }

}
