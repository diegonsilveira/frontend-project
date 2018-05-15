import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { TeachersComponent } from './teachers.component';
import { TeachersService } from './shared/teachers.service';
import { TeachersFormComponent } from './teachers-form/teachers-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    TeachersComponent,
    TeachersFormComponent
  ],
  exports: [
    TeachersComponent
  ],
  providers: [
    TeachersService
  ]
})
export class TeachersModule { }
