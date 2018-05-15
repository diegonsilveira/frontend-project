import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { routing } from './app.routing';
import { studentsRouting } from "./students/students.routing";
import { StudentsModule } from "./students/students.module";

import { teachersRouting } from "./teachers/teachers.routing";
import { TeachersModule } from "./teachers/teachers.module";

import { newsRouting } from "./news/news.routing";
import { NewsModule } from "./news/news.module";

//import { coursesRouting } from "./courses/courses.routing";
//import { CoursesModule } from "./courses/courses.module";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    StudentsModule,
    TeachersModule,
    NewsModule,
    //CoursesModule,
    teachersRouting,
    studentsRouting,
    newsRouting,
    //coursesRouting,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
