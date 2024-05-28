import { AfterContentChecked, AfterViewChecked, Component, DoCheck, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { MainCardComponent } from '../home/main-card/main-card.component';
import { CommonModule } from '@angular/common';
import { ShowMoreBtnComponent } from './show-more-btn/show-more-btn.component';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css'],
  standalone:true,
  imports:[
    ShowMoreBtnComponent,
    MainCardComponent,
    CommonModule
  ]
})

export class CategoryViewComponent implements DoCheck {
  articles: any = [];
  category: string = '';
  pag: number = 1;
  totalPosts: number = 0;
  btnStatus: boolean = false;
  

  constructor(private api: NewsService, private route: ActivatedRoute) {
    this.category = route.snapshot.paramMap.get('category') as string;

    this.getPosts();
  }

  ngDoCheck(): void {
    if (this.route.snapshot.paramMap.get('category') != this.category) {
      this.category = this.route.snapshot.paramMap.get('category') as string;
      this.articles = [];
      this.pag = 1;
      this.getPosts();
    };
  }

  getPosts() {
    this.api.getPostsByCategory(this.category, Number(this.pag++)).subscribe((res: any) =>
      (this.articles.push(...res.body.posts), this.totalPosts = res.body.count, this.updateStatus()));
  }

  updateStatus() {
    this.btnStatus = this.totalPosts > this.articles.length;
  }
}
