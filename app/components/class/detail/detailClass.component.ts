import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {Class, ClassService} from '../../../services/class.service';


@Component({
  selector: 'home',
  templateUrl: '/app/components/class/detail/detailClass.html',
  directives: [ROUTER_DIRECTIVES]
})
export class DetailClassComponent {
  class: Class;


  constructor(params: RouteParams) {
    this.class = new ClassService().get(+params.get('id'));
  }
}
