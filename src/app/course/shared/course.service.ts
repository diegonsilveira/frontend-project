import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CourseService {

  private url: string = "http://demo4401129.mockable.io/Course";

  constructor(private http: Http) { }

  getCourse(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getTeacher(id){
    return this.http.get(this.getCourseUrl(id))
      .map(res => res.json());
  }

  addCourse(t){
    return this.http.post(this.url, JSON.stringify(t))
      .map(res => res.json());
  }

  updateCourse(t){
    return this.http.put(this.getCourseUrl(t.id), JSON.stringify(t))
      .map(res => res.json());
  }

  deleteCourse(id){
    return this.http.delete(this.getCourseUrl(id))
      .map(res => res.json());
  }

  private getCourseUrl(id){
    return this.url + "/" + id;
  }
}
