import { Component, HostListener } from '@angular/core';
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
  results : any[] = [];
  pag: number = 1;

  constructor(private api: NewsService, private route: ActivatedRoute, private router: Router){
    this.input = route.snapshot.queryParamMap.get('q') as string;
    this.search();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body, html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

    const windowBottom = windowHeight + window.pageYOffset;

    if (windowBottom >= docHeight) {
      this.search(++this.pag)
    }
  }

  clear(){
    this.results = [];
    this.pag = 1;
  }
 
  search(pag?:number):any {
      if(this.input === '') return
      
      this.input = this.route.snapshot.queryParamMap.get('q') as string;

      this.api.search(this.input,this.type,pag).subscribe({
      next:(res:any)=>this.results.push(...res.body.results)})
      
  }
}
