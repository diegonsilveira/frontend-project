import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Teachers } from '../shared/teachers';
import { TeachersService } from '../shared/teachers.service';

@Component({
  selector: 'app-teachers-form',
  templateUrl: './teachers-form.component.html',
  styleUrls: ['./teachers-form.component.css']
})
export class TeachersFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  teachers: Teachers = new Teachers();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private teachersService: TeachersService
  ) {
    this.form = formBuilder.group({
      nome: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      curso:['', [
        Validators.required
      ]],
      disciplina:['', [
        Validators.required
      ]]
    });
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Alterar professor' : 'Incluir professor';

      if (!id)
        return;

      this.teachersService.getTeacher(id)
        .subscribe(
          teachers => this.teachers = teachers,
          response => {
            if (response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
  }

  save() {
    var result,
    teachersValue = this.form.value;

    if (teachersValue.id){
      result = this.teachersService.updateTeachers(teachersValue);
    } else {
      result = this.teachersService.addTeachers(teachersValue);
    }

    result.subscribe(data => this.router.navigate(['teachers']));
  }
}
