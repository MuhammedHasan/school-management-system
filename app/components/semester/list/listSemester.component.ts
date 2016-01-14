import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Semester,SemesterService} from '../../../services/semester.service';
import {NgForm, ControlGroup}    from 'angular2/common';


@Component({
  selector: 'home',
  templateUrl: '/app/components/semester/list/listSemester.html',
  directives: [ROUTER_DIRECTIVES]
})
export class ListSemesterComponent {
  semesters: Semester[];
  semesterService = new SemesterService()

  constructor() {
    this.semesters = this.semesterService.getall();
  }

  remove(id: number) {
    var s = this.semesters.find((x) => x.id == id);
    this.semesters.splice(this.semesters.indexOf(s), 1);
  }
}
