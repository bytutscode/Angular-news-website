import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PipesModule } from 'src/app/pipes/pipes.module';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
  standalone:true,
  imports:[
    RouterModule,
    PipesModule
  ]
})
export class UserCardComponent {
    @Input() user: any;
}
