import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  email: string = '';
  password: string = '';
  errorMsg: string = '';
  constructor(private news: NewsService, private router: Router) { }

  login() {

    this.news.login(this.email, this.password).subscribe({
      next: (res: any) => {
        res.body.token ? localStorage.setItem('token', res.body.token) : null;
        res.body.user ? localStorage.setItem('user', JSON.stringify(res.body.user)) : null;
        window.location.reload();
      },

      error: (err) => {
        localStorage.clear()
        this.showError(err.error.message);
      },
    });
  }

  showError(msg: string) {
    this.errorMsg = msg
  }

}
