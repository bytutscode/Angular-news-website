import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { articles } from 'src/app/data/database';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  id: any = 0;
  article: any = {};
  constructor(route: ActivatedRoute, news: NewsService) {
    this.id = route.snapshot.paramMap.get('id');
    this.article = articles.find(article => article.id == this.id);

    // news.getData();
    // news.login();
    news.getPost();
    console.log(news)
  }

  
}
