import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ListCourseComponent} from './list/listCourse.component';
import {DetailCourseComponent} from './detail/detailCourse.component';
import {CreateCourseComponent} from './create/createCourse.component';
import {UpdateCourseComponent} from './update/updateCourse.component';

@Component({
  selector: 'home',
  templateUrl: '/app/components/semester/semester.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/list', name: 'List', component: ListCourseComponent },
  { path: '/create', name: 'Create', component: CreateCourseComponent },
  { path: '/detail/:id', name: 'Detail', component: DetailCourseComponent },
  { path: '/update/:id', name: 'Update', component: UpdateCourseComponent },
])
export class CourseComponent { }
