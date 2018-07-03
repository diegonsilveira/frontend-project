import { Student } from './../../students/shared/student';
import { Teachers } from './../../teachers/shared/teachers';

export class Course {
  id: number;
  nome: string;
  professor: Array<Teachers>;
  alunos: Array<Student>;
}
