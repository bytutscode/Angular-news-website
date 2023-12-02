import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-btn',
  templateUrl: './update-btn.component.html',
  styleUrls: ['./update-btn.component.css']
})
export class UpdateBtnComponent {
  @Input() myProfile: boolean = false;
  constructor(private router: Router) {

  }

  update() {
    this.router.navigate(['profile/update']);
  }
}
