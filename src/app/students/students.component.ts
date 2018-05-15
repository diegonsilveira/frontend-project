import { Component, OnInit } from '@angular/core';
import { Student } from "./shared/student";
import { StudentsService } from './shared/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  private students: Student[] = [];

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.studentsService.getStudents()
      .subscribe(data => this.students = data);
  }

  deleteStudent(student){
    if (confirm("Tem certeza que gostaria de excluir o aluno " + student.nome + "?")) {
      var index = this.students.indexOf(student);
      student.splice(index, 1);

      this.studentsService.deleteStudent(student.id)
        .subscribe(null,
          err => {
            alert("O aluno não pode ser deletado.");
            this.students.splice(index, 0, student);
          });
    }
  }

}
