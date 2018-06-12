import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Course } from '../shared/course';
import { CourseService } from '../shared/course.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  course: Course = new Course();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {
    this.form = formBuilder.group({
      nome: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      disciplina:['', [
        Validators.required
      ]]
    });
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Alterar curso' : 'Incluir curso';

      if (!id)
        return;

      this.courseService.getTeacher(id)
        .subscribe(
          course => this.course = course,
          response => {
            if (response.status == 404) {
              this.router.navigate(['NotFound']);
            }
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
