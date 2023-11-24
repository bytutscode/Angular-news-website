import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post';


@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent {
  @Input() post: Post | undefined;
}
