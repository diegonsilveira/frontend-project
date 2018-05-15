import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './news.component';
import { NewsFormComponent } from "./news-form/news-form.component";

const newsRoutes: Routes = [
  { path: 'news', component: NewsComponent, pathMatch: 'full' },
  { path: 'news/new', component: NewsFormComponent},
  { path: 'news/:id', component: NewsFormComponent}
];

export const newsRouting = RouterModule.forChild(newsRoutes);
