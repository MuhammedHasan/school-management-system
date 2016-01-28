import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ListClassComponent} from './list/listClass.component';
import {DetailClassComponent} from './detail/detailClass.component';
import {CreateClassComponent} from './create/createClass.component';
import {UpdateClassComponent} from './update/updateClass.component';

@Component({
  selector: 'home',
  templateUrl: '/app/components/class/class.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/list', name: 'List', component: ListClassComponent },
  { path: '/create', name: 'Create', component: CreateClassComponent },
  { path: '/detail/:id', name: 'Detail', component: DetailClassComponent },
  { path: '/update/:id', name: 'Update', component: UpdateClassComponent },
])
export class ClassComponent { }
