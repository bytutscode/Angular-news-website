import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ]
})
export class ArticleModule { }
