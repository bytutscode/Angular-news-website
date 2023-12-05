import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Observable } from 'rxjs';

export const authGuard: CanActivateFn = async (route, state) => {
  const authorization = 'Bearer ' + localStorage.getItem('token');
  let allowed = false;

  const router = inject(Router)
  const http = inject(HttpClient);

  return new Promise<boolean>((resolve, reject) => {
    const authorization = 'Bearer ' + localStorage.getItem('token');
    http.post('https://node-angular-blogs-bytutscode.vercel.app/verifytoken', null, { observe: 'response', headers: { authorization } })
      .subscribe({
        next: (res) => {
          resolve(true);
        },
        error: (error) => {
          router.navigate(['signin']);
          resolve(false);
        }
      });
  });
};

