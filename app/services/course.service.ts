import { Injectable } from 'angular2/core';
import {Semester} from './semester.service';
import {Teacher} from './teacher.servise';
import {Class} from './class.service';
import {Lecture} from './lecture';


@Injectable()
export class Course {
  id: number;
  name: String;
  teacher: Teacher;
  lecture: Lecture[];
  semester: Semester;
  class: Class;
}

@Injectable()
export class CourseService {
  courses = new Array<Course>();

  constructor() {
    var t = new Teacher();
    t.name = 'Hasan';
    t.surname = 'Celik';

    var s = new Semester();
    s.startDate = '12/08/2015'
    s.endDate = '12/04/2016'

    var cl = new Class();
    cl.name = 'A1';

    var c = new Course();
    c.id = 1;
    c.name = "Arabic 001";
    c.teacher = t;
    c.semester = s;
    c.class = cl;
    this.courses.push(c);

  }

  get(id: number) {
    return this.courses[0];
  }

  getall() {
    return this.courses;
  }

  save() { }

}
