import { Teachers } from './../../teachers/shared/teachers';

export class Course {
  id: number;
  nome: string;
  professor: Teachers = new Teachers;
}
