import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Teacher, TeacherService} from '../../../services/teacher.servise';

@Component({
  selector: 'home',
  templateUrl: '/app/components/teacher/create/createTeacher.html',
  directives: [ROUTER_DIRECTIVES]
})
export class UpdateTeacherComponent {
  model = new Teacher();
  constructor(private router: Router) {
    this.model = new TeacherService().get(1);
  }

  onSubmit() {
    var s = new Teacher();
    s.name = this.model.name;
    s.surname = this.model.surname;
    s.phoneNumber = this.model.phoneNumber;
    s.email = this.model.email;
    this.model = new Teacher();
    this.router.navigate(['/Student/List']);
  }
}
