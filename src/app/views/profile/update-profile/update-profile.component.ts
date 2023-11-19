import { Component } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent {
  profilePhoto: File | null = null;
  banner: File | null = null;
  name: string = '';

  constructor(private api:NewsService) {

  }

  onPhotoSelected(event: any): void {
    const file: File = event.target.files[0];
    this.profilePhoto = file;
  }
  onBannerSelected(event: any): void {
    const file: File = event.target.files[0];
    this.banner = file;
  }

  updateUser() {
    const body = new FormData();
    if (this.profilePhoto)
    body.append('avatar',this.profilePhoto)
    this.profilePhoto? this.api.updateProfilePhoto(body).subscribe(res=>console.log(res)): null;
  }
}
