import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-nav-bar-search',
  templateUrl: './nav-bar-search.component.html',
  styleUrls: ['./nav-bar-search.component.css']
})
export class NavBarSearchComponent {
  input: string = '';
  constructor(private router: Router, private api: NewsService){

  }

  search():void{
    if(this.input === '') return;

    this.router.navigate(['/loading']).then(()=>{
      this.router.navigateByUrl('/search?q=' + this.input);
    }); 
  }
}
