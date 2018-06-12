import { Component, OnInit } from '@angular/core';
import { Course } from "./shared/course";
import { CourseService } from './shared/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  private course: Course[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.getCourse()
      .subscribe(data => this.course = data);
  }

  deleteCourse(n){
    if (confirm("Tem certeza que gostaria de excluir o curso " + n.nome + "?")) {
      var index = this.course.indexOf(n);
      n.splice(index, 1);

      this.courseService.deleteCourse(n.id)
        .subscribe(null,
          err => {
            alert("O professor não pode ser excluído.");
            this.course.splice(index, 0, n);
          });
    }
  }

}
