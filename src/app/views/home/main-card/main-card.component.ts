import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PipesModule } from 'src/app/pipes/pipes.module';


@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css'],
  standalone: true,
  imports:[
    CommonModule,
    PipesModule, 
    RouterModule
  ]
})
export class MainCardComponent {
  @Input() post: Post | undefined;
}
