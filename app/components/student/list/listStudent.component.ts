import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Student, StudentService} from '../../../services/student.servise';
import {NgForm, ControlGroup}    from 'angular2/common';


@Component({
  selector: 'home',
  templateUrl: '/app/components/student/list/listStudent.html',
  directives: [ROUTER_DIRECTIVES]
})
export class ListStudentComponent {
  students: Student[];
  studentService = new StudentService()

  constructor() {
    this.students = this.studentService.getall();
  }

  remove(id: number) {
    var s = this.students.find((x) => x.id == id);
    this.students.splice(this.students.indexOf(s), 1);
  }
}
