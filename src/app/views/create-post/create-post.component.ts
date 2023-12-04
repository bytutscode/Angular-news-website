import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  title: string = '';
  text: string = '';
  categoryId: string = '4';
  errorMsg: string = '';
  form: FormData = new FormData();
  postImgLocale = '';

  loading: boolean = false;

  constructor(private router: Router, private api: NewsService) {

  }
  onImageSelected(event: any) {
    const file: File = event.target.files[0];
    const postImgForm = new FormData();
    postImgForm.set('image', file);
    this.form = postImgForm;
    this.showImg(file);
  }



  createPost() {
    this.loading = true;
    this.form.set('title', this.title);
    this.form.set('content', this.text);
    this.form.set('category_id', this.categoryId);

    this.api.createPost(this.form).subscribe({
      next: (value) => {
        this.title = '';
        this.text = '';
        this.router.navigate(['profile'])
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err.error.message;
      },
    })
  }


  showImg(img: any) {
    this.postImgLocale = URL.createObjectURL(img);
  }
}
