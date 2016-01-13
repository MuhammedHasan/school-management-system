import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {Teacher, TeacherService} from '../../../services/teacher.servise';


@Component({
  selector: 'home',
  templateUrl: '/app/components/teacher/detail/detailTeacher.html',
  directives: [ROUTER_DIRECTIVES]
})
export class DetailTeacherComponent {
  teacher: Teacher;


  constructor(params: RouteParams) {
    this.teacher = new TeacherService().get(+params.get('id'));
  }
}
