import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatDatePipe } from './format-date.pipe';
import { BucketURLPipe } from './bucket-url.pipe';



@NgModule({
  declarations: [FormatDatePipe, BucketURLPipe],
  imports: [
    CommonModule,
  ],
  exports: [FormatDatePipe, BucketURLPipe]
})
export class PipesModule { }
