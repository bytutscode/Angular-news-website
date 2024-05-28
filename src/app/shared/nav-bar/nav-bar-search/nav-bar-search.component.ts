import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-nav-bar-search',
  templateUrl: './nav-bar-search.component.html',
  styleUrls: ['./nav-bar-search.component.css'],
  standalone:true, 
  imports:[
    FormsModule
  ]
})
export class NavBarSearchComponent {
  input: string = '';
  constructor(private router: Router, private api: NewsService) {

  }

  search(): void {
    if (this.input === '') return;
    this.router.navigateByUrl('/search?q=' + this.input);
  }
}
