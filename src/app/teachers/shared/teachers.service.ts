import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TeachersService {

  private url: string = "http://demo4401129.mockable.io/teachers";

  constructor(private http: Http) { }

  getTeachers(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getTeacher(id){
    return this.http.get(this.getTeachersUrl(id))
      .map(res => res.json());
  }

  addTeachers(t){
    return this.http.post(this.url, JSON.stringify(t))
      .map(res => res.json());
  }

  updateTeachers(t){
    return this.http.put(this.getTeachersUrl(t.id), JSON.stringify(t))
      .map(res => res.json());
  }

  deleteTeachers(id){
    return this.http.delete(this.getTeachersUrl(id))
      .map(res => res.json());
  }

  private getTeachersUrl(id){
    return this.url + "/" + id;
  }
}
