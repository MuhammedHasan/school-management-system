import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Class, ClassService} from '../../../services/class.service';
import {NgForm, ControlGroup}    from 'angular2/common';


@Component({
  selector: 'home',
  templateUrl: '/app/components/class/list/listClass.html',
  directives: [ROUTER_DIRECTIVES]
})
export class ListClassComponent {
  classes: Class[];
  classService = new ClassService()

  constructor() {
    this.classes = this.classService.getall();
  }

  remove(id: number) {
    var s = this.classes.find((x) => x.id == id);
    this.classes.splice(this.classes.indexOf(s), 1);
  }
}
