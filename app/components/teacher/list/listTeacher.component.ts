import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Teacher, TeacherService} from '../../../services/teacher.servise';
import {NgForm, ControlGroup}    from 'angular2/common';


@Component({
  selector: 'home',
  templateUrl: '/app/components/teacher/list/listTeacher.html',
  directives: [ROUTER_DIRECTIVES]
})
export class ListTeacherComponent {
  teachers: Teacher[];
  teacherService = new TeacherService()

  constructor() {
    this.teachers = this.teacherService.getall();
  }

  remove(id: number) {
    var s = this.teachers.find((x) => x.id == id);
    this.teachers.splice(this.teachers.indexOf(s), 1);
  }
}
