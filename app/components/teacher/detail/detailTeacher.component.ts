import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {Student, StudentService} from '../../../services/student.servise';

@Component({
  selector: 'home',
  templateUrl: '/app/components/student/detail/detailStudent.html',
  directives: [ROUTER_DIRECTIVES]
})
export class DetailStudentComponent {
  student: Student;
  xs: Array<Number>;
  months: Array<Number>;
  courses: Array<String>;
  grades;

  constructor(params: RouteParams) {
    this.student = new StudentService().get(+params.get('id'));
    this.xs = new Array<Number>();
    for (var i = 0; i <= 30; i++) {
      this.xs.push(i * 13);
    }
    this.months = new Array<Number>();
    this.months.push(13);
    for (var i = 1; i <= 7; i++) {
      this.months.push(i * 13 * 4);
    }

    this.courses = ['Arab 001', 'Fikih 001']
    this.grades = [['Arab 001', 60], ['Fikih 001', 90]]

  }
}
