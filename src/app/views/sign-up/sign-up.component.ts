import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, map, retry } from 'rxjs';
import { NewsService } from 'src/app/services/news.service';

@Component({
  standalone:true,
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  imports:[FormsModule]
})
export class SignUpComponent implements OnDestroy {
  name: string = '';
  email: string = '';
  password: string = '';
  errorMsg: string = '';
  subscription = new Subscription;
  constructor(private api: NewsService, private router: Router) {

  }
 


  showError(msg: string) {
    this.errorMsg = msg
  }

  signup() {
    this.subscription = this.api.signup(this.name.trim(), this.email.trim(), this.password.trim()).pipe(
      retry(2)
    ).subscribe({
      next: (res) => {
        this.router.navigate(['signin']);
      },
      error: (err) => {
        this.showError(err.error.message)
      }
    })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
