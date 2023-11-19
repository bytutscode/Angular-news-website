import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService implements OnInit {
  private baseUrl = 'http://localhost:4000/';
  private authorization = 'Bearer ' + localStorage.getItem('token');
  private selfUser = JSON.parse(localStorage.getItem('user') as string);
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {

  }

  login(email: string, password: string) {
    return this.http.post(`${this.baseUrl}login`,
      { email, password },
      { observe: 'response' })
  }

  signup(name: string, email: string, password: string) {
    return this.http.post(`${this.baseUrl}user`,
      { name, email, password },
      { observe: 'response' })
  }

  getProfile() {
    return this.http.get(`${this.baseUrl}user/${this.selfUser.id}`,{ observe: 'response',headers:{authorization: this.authorization} })
  }

  getPost() {
    return this.http.get(`${this.baseUrl}post`,{ observe: 'response',headers:{authorization: this.authorization} })
  }

  updateProfilePhoto(body: object){
    return this.http.post(`${this.baseUrl}profilephotos`,body,{ observe: 'response',headers:{authorization: this.authorization} })
  }
  updateUser(body: object){
    return this.http.put(`${this.baseUrl}user`,body,{ observe: 'response',headers:{authorization: this.authorization} })
  }



}
