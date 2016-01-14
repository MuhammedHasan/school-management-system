import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ListSemesterComponent} from './list/listSemester.component';
import {DetailSemesterComponent} from './detail/detailSemester.component';
import {CreateSemesterComponent} from './create/createSemester.component';
import {UpdateSemesterComponent} from './update/updateSemester.component';

@Component({
  selector: 'home',
  templateUrl: '/app/components/semester/semester.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/list', name: 'List', component: ListSemesterComponent },
  { path: '/create', name: 'Create', component: CreateSemesterComponent },
  { path: '/detail/:id', name: 'Detail', component: DetailSemesterComponent },
  { path: '/update/:id', name: 'Update', component: UpdateSemesterComponent },
])
export class SemesterComponent { }
