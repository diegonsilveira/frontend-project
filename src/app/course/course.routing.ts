import { Routes, RouterModule } from '@angular/router';

import { CourseComponent } from './course.component';
import { CourseFormComponent } from "./course-form/course-form.component";

const courseRoutes: Routes = [
  { path: 'course', component: CourseComponent, pathMatch: 'full' },
  { path: 'course/new', component: CourseFormComponent},
  { path: 'course/:id', component: CourseFormComponent}
];

export const courseRouting = RouterModule.forChild(courseRoutes);
