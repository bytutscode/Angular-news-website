import { Component, DoCheck, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, map, of, retry, switchMap, tap } from 'rxjs';
import { User } from 'src/app/models/User';
import { Post } from 'src/app/models/post';
import { NewsService } from 'src/app/services/news.service';
import { SmallCardComponent } from '../home/small-card/small-card.component';
import { UserCardComponent } from 'src/app/shared/user-card/user-card.component';
import { CommonModule } from '@angular/common';
import { LoaderAnimationComponent } from 'src/app/shared/loader-animation/loader-animation.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  standalone:true,
  imports:[
    SmallCardComponent,
    UserCardComponent,
    CommonModule,
    LoaderAnimationComponent
  ]
})
export class SearchComponent implements OnInit, DoCheck {
  input:string | null = '';
  type: string = 'posts';
  results: any[] = [];
  results$: Observable<(Post | User)[] | any> = of([]);
  pag: number = 1;
  loading: boolean = true;
  total: number = 0;

  constructor(private api: NewsService, private route: ActivatedRoute, private router: Router) {
    
  }
  ngOnInit(): void {
    this.input = this.route.snapshot.queryParamMap.get('q');
    this.search();
  }

  ngDoCheck(): void {
    if (this.input != this.route.snapshot.queryParamMap.get('q')) {
      this.clear()
      this.search()
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body, html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

    const windowBottom = windowHeight + window.pageYOffset;

    if (windowBottom >= docHeight && this.results.length < this.total && !this.loading) {
      console.log('deu')
      this.search(++this.pag)
    }
  }

  clear() {
    this.results = [];
    this.pag = 1;
  }

  search(pag?: number): any {
    this.loading = true;
    this.input = this.route.snapshot.queryParamMap.get('q');
    if (!this.input) return

    return this.results$ = this.api.search(this.input, this.type,pag).pipe(
      retry(2),
      map((r:any) =>{
        this.total = r.total;
        return this.results.push(...r.results);
      }),
      tap(()=>this.loading = false)
    );
  }
}
