import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { NewsComponent } from './news.component';
import { NewsService } from './shared/news.service';
import { NewsFormComponent } from './news-form/news-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    NewsComponent,
    NewsFormComponent
  ],
  exports: [
    NewsComponent
  ],
  providers: [
    NewsService
  ]
})
export class NewsModule { }
