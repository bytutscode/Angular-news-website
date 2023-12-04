import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  errorMsg: string = '';

  constructor(private api: NewsService, private router: Router) {

  }


  showError(msg: string) {
    this.errorMsg = msg
  }

  signup() {
    this.api.signup(this.name.trim(), this.email.trim(), this.password.trim()).subscribe({
      next: (res) => {
        this.router.navigate(['signin']);
      },
      error: (err) => {
        this.showError(err.error.message)
      }
    })
  }

}
