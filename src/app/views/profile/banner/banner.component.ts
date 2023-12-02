import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  @Input() banner: string = '';
  @Input() myProfile: boolean = false;

  constructor(private router: Router, private api: NewsService) { }

  onBannerSelected(event: any): void {
    const file: File = event.target.files[0];
    const bannerForm = new FormData();
    bannerForm.append('avatar', file);

    this.api.updateBannerPhoto(bannerForm).subscribe({
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
