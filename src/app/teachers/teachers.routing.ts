import { Routes, RouterModule } from '@angular/router';

import { TeachersComponent } from './teachers.component';
import { TeachersFormComponent } from "./teachers-form/teachers-form.component";

const teachersRoutes: Routes = [
  { path: 'teachers', component: TeachersComponent, pathMatch: 'full' },
  { path: 'teachers/new', component: TeachersFormComponent},
  { path: 'teachers/:id', component: TeachersFormComponent}
];

export const teachersRouting = RouterModule.forChild(teachersRoutes);
