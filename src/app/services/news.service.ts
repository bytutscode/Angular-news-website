import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { findCategoryIdByName } from '../utils/categories';
import { Post } from '../models/post';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private baseUrl = 'https://node-angular-blogs.vercel.app/';
  private authorization = 'Bearer ' + localStorage.getItem('token');
  private selfUser = JSON.parse(localStorage.getItem('user') as string);

  constructor(private http: HttpClient) {

  }
 

  login(email: string, password: string) {
    return this.http.post(`${this.baseUrl}login`,{ email, password });
  }

  signup(name: string, email: string, password: string) {
    return this.http.post(`${this.baseUrl}user`,{ name, email, password })
  }

  getProfile(id?: string | number) {
    return this.http.get<User>(`${this.baseUrl}user/${id ? id : this.selfUser.id}`)
  }

  getPostById(id: string | number) {
    return this.http.get(`${this.baseUrl}post/${id}`, { observe: 'response' })
  }
  getPost(id: string | number) {
    return this.http.get<Post[]>(`${this.baseUrl}post?userID=${id}`)
  }
  getPostMain() {
    return this.http.get<Post[]>(`${this.baseUrl}post/home`)
  }

  updateProfilePhoto(body: object) {
    return this.http.post(`${this.baseUrl}profilephotos`, body, { observe: 'response', headers: { authorization: this.authorization } })
  }

  updateBannerPhoto(body: object) {
    return this.http.post(`${this.baseUrl}profilephotos?type=banner`, body, { observe: 'response', headers: { authorization: this.authorization } })
  }

  updateUser(body: object) {
    return this.http.put(`${this.baseUrl}user`, body, { observe: 'response', headers: { authorization: this.authorization } })
  }

  createPost(body: object) {
    return this.http.post(`${this.baseUrl}post`, body, { observe:'response' ,headers: { authorization: this.authorization } });
  }



  getPostsByCategory(category: string, pag: number) {
    return this.http.get(`${this.baseUrl}post?category=${findCategoryIdByName(category)}&pag=${pag}`,
      { observe: 'response' });
  }

  search(input: string, type?: string, pag?: number) {
    const query = `?input=${input}${type ? `&type=${type}` : ''}${pag ? `&pag=${pag}` : ''}`;

    return this.http.get<Post[] | User[]>(`${this.baseUrl}search${query}`);
  }


  deletePostById(id: string | number) {
    return this.http.delete(`${this.baseUrl}post/${id}`,
      { observe: 'response', headers: { authorization: this.authorization } });
  }


}
