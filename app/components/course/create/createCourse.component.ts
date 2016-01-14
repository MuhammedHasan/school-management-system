import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Course, CourseService} from '../../../services/course.service';

@Component({
  selector: 'home',
  templateUrl: '/app/components/course/create/createCourse.html',
  directives: [ROUTER_DIRECTIVES]
})
export class CreateCourseComponent {
  model = new Course();
  teachers: Array<String>;
  semesters: Array<String>;
  classes: Array<String>;
  lectures: Array<Number>;
  days: Array<String>;

  constructor(private router: Router) {
    this.teachers = ['Ahmet Celik', 'Hasan Celik', 'Mehmet Celik'];
    this.semesters = ['2015-2016 Guz', '2015-2016 Bahar'];
    this.classes = ['A1', 'A2'];
    this.days = ['Pazartesi', 'Sali', 'Carsamba', 'Persembe', 'Cuma', 'Cumartesi', 'Pazar'];
    this.lectures = [1, 1];
  }

  onSubmit() {
    var c = new Course();
    c.name = this.model.name;
    this.model = new Course();
    this.router.navigate(['/Course/List']);
  }

  addLecture(event) {
    this.lectures.push(1);
    event.preventDefault();
  }
}
