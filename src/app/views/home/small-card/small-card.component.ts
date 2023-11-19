import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input() id: string  = '';
  @Input() photoUrl: string  = '';
  @Input() title: string  = '';
  @Input() source: string  = '';
  @Input() date: string  = '';
}
