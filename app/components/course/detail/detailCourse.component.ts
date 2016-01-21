import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {Course,CourseService} from '../../../services/course.service';

@Component({
  selector: 'home',
  templateUrl: '/app/components/course/detail/detailCourse.html',
  directives: [ROUTER_DIRECTIVES]
})
export class DetailCourseComponent {
  course: Course;

  constructor(params: RouteParams) {
    this.course = new CourseService().get(+params.get('id'));
  }
}
