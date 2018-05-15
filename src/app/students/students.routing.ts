import { Routes, RouterModule } from '@angular/router';

import { StudentsComponent } from './students.component';
import { StudentsFormComponent } from "./students-form/students-form.component";

const studentsRoutes: Routes = [
  { path: 'students', component: StudentsComponent, pathMatch: 'full' },
  { path: 'students/new', component: StudentsFormComponent},
  { path: 'students/:id', component: StudentsFormComponent}
];

export const studentsRouting = RouterModule.forChild(studentsRoutes);
