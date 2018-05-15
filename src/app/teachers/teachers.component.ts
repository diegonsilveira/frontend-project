import { Component, OnInit } from '@angular/core';
import { Teachers } from "./shared/teachers";
import { TeachersService } from './shared/teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  private teachers: Teachers[] = [];

  constructor(private teachersService: TeachersService) { }

  ngOnInit() {
    this.teachersService.getTeachers()
      .subscribe(data => this.teachers = data);
  }

  deleteStudent(n){
    if (confirm("Tem certeza que gostaria de excluir o professor " + n.titulo + "?")) {
      var index = this.teachers.indexOf(n);
      n.splice(index, 1);

      this.teachersService.deleteTeachers(n.id)
        .subscribe(null,
          err => {
            alert("O professor não pode ser excluído.");
            this.teachers.splice(index, 0, n);
          });
    }
  }

}
