import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Student } from '../shared/student';
import { StudentsService } from '../shared/students.service';
import { BasicValidators } from '../../shared/basic-validators';

@Component({
  selector: 'app-student-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.css']
})
export class StudentsFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  student: Student = new Student();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private studentsService: StudentsService
  ) {
    this.form = formBuilder.group({
      nome: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      curso:['', [
        Validators.required
      ]]
    });
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Alterar aluno' : 'Incluir aluno';

      if (!id)
        return;

      this.studentsService.getStudent(id)
        .subscribe(
          student => this.student = student,
          response => {
            if (response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
  }

  save() {
    var result,
      studentValue = this.form.value;

    if (studentValue.id){
      result = this.studentsService.updateStudent(studentValue);
    } else {
      result = this.studentsService.addStudent(studentValue);
    }

    result.subscribe(data => this.router.navigate(['students']));
  }
}
