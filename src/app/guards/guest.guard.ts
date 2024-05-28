import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';

export const guestGuard: CanActivateFn = (route, state) => {
  const authorization = 'Bearer ' + localStorage.getItem('token');

  const router = inject(Router);
  const http = inject(HttpClient);
  const url = 'https://node-angular-blogs.vercel.app/verifytoken';
  
  return http.post(url, null, {observe:'response',headers: { authorization } })
  .pipe(
  map((r)=>{router.navigate(['']) ; return r.status!=200}),
  catchError((error)=>{
    return of(false)
  }));
};
