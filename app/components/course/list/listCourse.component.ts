import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Course,CourseService} from '../../../services/course.service';
import {NgForm, ControlGroup}    from 'angular2/common';


@Component({
  selector: 'home',
  templateUrl: '/app/components/course/list/listCourse.html',
  directives: [ROUTER_DIRECTIVES]
})
export class ListCourseComponent {
  courses: Course[];
  courseService = new CourseService()

  constructor() {
    this.courses = this.courseService.getall();
  }

  remove(id: number) {
    var s = this.courses.find((x) => x.id == id);
    this.courses.splice(this.courses.indexOf(s), 1);
  }
}
