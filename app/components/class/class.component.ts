import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ListTeacherComponent} from './list/listTeacher.component';
import {DetailTeacherComponent} from './detail/detailTeacher.component';
import {CreateTeacherComponent} from './create/createTeacher.component';
import {UpdateTeacherComponent} from './update/updateTeacher.component';

@Component({
  selector: 'home',
  templateUrl: '/app/components/class/class.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/list', name: 'List', component: ListTeacherComponent },
  { path: '/create', name: 'Create', component: CreateTeacherComponent },
  { path: '/detail/:id', name: 'Detail', component: DetailTeacherComponent },
  { path: '/update/:id', name: 'Update', component: UpdateTeacherComponent },
])
export class TeacherComponent { }
