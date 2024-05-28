import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  standalone:true,
  imports:[
    CommonModule,
    PipesModule
  ]
})
export class BannerComponent implements OnDestroy {
  @Input() banner: string = '';
  @Input() myProfile: boolean = false;
  @Output() changedBanner = new EventEmitter<Boolean>();
  

  subscription = new Subscription;
  constructor(private router: Router, private api: NewsService) { }

  onBannerSelected(event: any): void {
    const file: File = event.target.files[0];
    const bannerForm = new FormData();
    bannerForm.append('avatar', file);

    this.subscription = this.api.updateBannerPhoto(bannerForm).subscribe({
      next: () => this.reload(),
      error: (err) => { alert(err.error.message); }
    });
  }

  reload() {
    this.changedBanner.emit(true);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
