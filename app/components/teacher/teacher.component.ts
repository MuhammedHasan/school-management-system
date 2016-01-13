import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {Student} from '../../services/student.servise';
import {ListStudentComponent} from './list/listStudent.component';
import {DetailStudentComponent} from './detail/detailStudent.component';
import {CreateStudentComponent} from './create/createStudent.component';
import {UpdateStudentComponent} from './update/updateStudent.component';

@Component({
  selector: 'home',
  templateUrl: '/app/components/student/student.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/list', name: 'List', component: ListStudentComponent },
  { path: '/create', name: 'Create', component: CreateStudentComponent },
  { path: '/detail/:id', name: 'Detail', component: DetailStudentComponent },
  { path: '/update/:id', name: 'Update', component: UpdateStudentComponent },

])
export class StudentComponent {
  students: Student[];
  constructor() {
  }
}
