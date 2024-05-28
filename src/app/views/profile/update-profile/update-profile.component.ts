import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css'],
  standalone:true,
  imports:[
    CommonModule,
    FormsModule
  ]
})
export class UpdateProfileComponent implements OnInit, OnDestroy{
  errorMsg: string = '';
  email: string = '';
  user = JSON.parse(localStorage.getItem('user') as string);
  subscription: Subscription = new Subscription 
  constructor(private api: NewsService, private router: Router) {
    
  }
  
  ngOnInit(): void {
    this.email = this.user.userEmail;
  }

  updateUser() {
    const body = this.email.trim() !== this.user.userEmail.trim()?
    {email:this.user.userEmail, name: this.user.name}:{name: this.user.name};

    this.subscription = this.api.updateUser(body).subscribe({
      next:()=>{
        const user = JSON.parse(localStorage.getItem('user') as string);
        user.email = this.user.userEmail;
        user.name = this.user.name;
        localStorage.setItem('user',JSON.stringify(this.user))
        this.router.navigate(['profile']);
      },
      error:(err)=> {
          this.errorMsg = err.error.message;
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
