import { TeachersService } from './../../teachers/shared/teachers.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Course } from '../shared/course';
import { CourseService } from '../shared/course.service';
import { BasicValidators } from '../../shared/basic-validators';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  course;

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {
    this.form = formBuilder.group({
      nome: ['', []],
      professor: formBuilder.group({
        nome:  ['', []],
        curso:  ['', []],
        disciplina:  ['', []]
      }),
      alunos: formBuilder.group({
        nome:  ['', []]
      })
    });
  }

  ngOnInit() {

    var self = this;

    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Alterar curso' : 'Incluir curso';

      if (!id) {
        this.course = new Course;
        return;
      }

      this.courseService.getOnlyOneCourse(id).subscribe((course) =>{
        this.course = course;
      });
    });
  }

  save() {
    var result,
    courseValue = this.form.value;

    if (courseValue.id){
      result = this.courseService.updateCourse(courseValue);
    } else {
      result = this.courseService.addCourse(courseValue);
    }

    result.subscribe(data => this.router.navigate(['course']));
  }
}
