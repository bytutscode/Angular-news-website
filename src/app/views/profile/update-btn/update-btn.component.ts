import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-btn',
  templateUrl: './update-btn.component.html',
  styleUrls: ['./update-btn.component.css'],
  standalone:true,
  imports:[
    CommonModule
  ]
})
export class UpdateBtnComponent {
  @Input() myProfile: boolean = false;
  constructor(private router: Router) {

  }

  update() {
    this.router.navigate(['profile/update']);
  }
}
