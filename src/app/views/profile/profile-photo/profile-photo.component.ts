import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-profile-photo',
  templateUrl: './profile-photo.component.html',
  styleUrls: ['./profile-photo.component.css']
})
export class ProfilePhotoComponent {
  @Input() profilePhoto: string = '';
  @Input() myProfile: boolean = false;
  constructor(private api: NewsService, private router: Router) {

  }

  onPhotoSelected(event: any): void {
    const file: File = event.target.files[0];
    const profilePhotoForm = new FormData();
    profilePhotoForm.append('avatar', file);

    this.api.updateProfilePhoto(profilePhotoForm).subscribe({
      next: () => this.reload(),
      error: (err) => { alert(err.error.message); }
    });
  }

  reload() {
    this.router.navigateByUrl('/loading', { skipLocationChange: true }).then(res => {
      this.router.navigate(['profile'])
    })
  }
}
