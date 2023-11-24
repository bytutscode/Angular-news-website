import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent {
  articles: any = [];
  category: string = '';
  pag: number = 1;
  totalPosts: number = 0;
  btnStatus: boolean = false;

  constructor(private api: NewsService, private route: ActivatedRoute) {
    this.category = route.snapshot.paramMap.get('category') as string;
    this.getPosts();
  }

 

  getPosts() {
    this.api.getPostsByCategory(this.category, Number(this.pag++)).subscribe((res: any) =>
      (this.articles.push(...res.body.posts), this.totalPosts = res.body.count, this.updateStatus()));
  }

  updateStatus() {
    this.btnStatus = this.totalPosts > this.articles.length;
  }
}
