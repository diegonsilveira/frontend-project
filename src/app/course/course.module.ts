import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { CourseComponent } from './course.component';
import { CourseService } from './shared/course.service';
import { CourseFormComponent } from './course-form/course-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    CourseComponent,
    CourseFormComponent
  ],
  exports: [
    CourseComponent
  ],
  providers: [
    CourseService
  ]
})
export class CourseModule { }
