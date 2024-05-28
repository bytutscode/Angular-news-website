import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { Observable, Subscription, catchError,  map,  of,  retry,  tap } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  standalone: true,
  imports:[FormsModule]
})
export class SignInComponent implements OnDestroy {
  email: string = '';
  password: string = '';
  errorMsg: string = '';
  
  private subscription = new Subscription;
  constructor(private news: NewsService, private router: Router) { }

  login() {

   this.subscription = this.news.login(this.email, this.password).pipe(
      retry(2),
      map((response: any) => {
        if (response.token && response.user) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.user));
          this.router.navigate(['']).then(() =>{
              location.reload()
          });
        }
      }),
      catchError((err) => {
        localStorage.clear();
        this.showError(err.error.message);
        return of();
      })
    ).subscribe();
  }

  showError(msg: string) {
    this.errorMsg = msg
  }
  
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
