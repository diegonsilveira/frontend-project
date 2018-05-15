import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class StudentsService {

  private url: string = "http://demo4401129.mockable.io/students";

  constructor(private http: Http) { }

  getStudents(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getStudent(id){
    return this.http.get(this.getStudentUrl(id))
      .map(res => res.json());
  }

  addStudent(student){
    return this.http.post(this.url, JSON.stringify(student))
      .map(res => res.json());
  }

  updateStudent(student){
    return this.http.put(this.getStudentUrl(student.id), JSON.stringify(student))
      .map(res => res.json());
  }

  deleteStudent(id){
    return this.http.delete(this.getStudentUrl(id))
      .map(res => res.json());
  }

  private getStudentUrl(id){
    return this.url + "/" + id;
  }
}
