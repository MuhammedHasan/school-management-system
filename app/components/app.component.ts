import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from "./home/home.component";
import {StudentComponent} from "./student/student.component";
import {TeacherComponent} from "./teacher/teacher.component";
import {SemesterComponent} from "./semester/semester.component";


@Component({
  selector: 'app',
  templateUrl: '/app/components/base.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/teacher/...', name: 'Teacher', component: TeacherComponent },
  { path: '/student/...', name: 'Student', component: StudentComponent },
  { path: '/semester/...', name: 'Semester', component: SemesterComponent},
  { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
])
export class AppComponent { }
