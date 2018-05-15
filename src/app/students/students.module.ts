import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { StudentsComponent } from './students.component';
import { StudentsService } from './shared/students.service';
import { StudentsFormComponent } from './students-form/students-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    StudentsComponent,
    StudentsFormComponent
  ],
  exports: [
    StudentsComponent
  ],
  providers: [
    StudentsService
  ]
})
export class StudentsModule { }
