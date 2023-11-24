import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  input: string = '';
  type: string = 'posts';

  constructor(private api: NewsService, private route: ActivatedRoute, private router: Router){
    this.input = route.snapshot.queryParamMap.get('q') as string;
    this.search(this.input as string, 'posts');
  }

  search(input?:string ,type?: string):any {
      if(this.input === '') return this.router.navigate(['']);
      this.api.search(this.input,type)
  }
}
