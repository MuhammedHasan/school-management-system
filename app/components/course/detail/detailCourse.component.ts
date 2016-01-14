import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {Course,CourseService} from '../../../services/course.service';

@Component({
  selector: 'home',
  templateUrl: '/app/components/semester/detail/detailSemester.html',
  directives: [ROUTER_DIRECTIVES]
})
export class DetailCourseComponent {
  semester: Semester;

  constructor(params: RouteParams) {
    this.semester = new SemesterService().get(+params.get('id'));
  }
}
