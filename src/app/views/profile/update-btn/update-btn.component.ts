import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-btn',
  templateUrl: './update-btn.component.html',
  styleUrls: ['./update-btn.component.css']
})
export class UpdateBtnComponent {
  constructor(private router:Router){

  }

  update(){
    console.log('foi');
    
    this.router.navigate(['profile/update']);
  }
}
