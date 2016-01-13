import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Student} from '../../../services/student.servise';

@Component({
  selector: 'home',
  templateUrl: '/app/components/student/create/createStudent.html',
  directives: [ROUTER_DIRECTIVES]
})
export class CreateStudentComponent {
  model = new Student();
  constructor(private router: Router) { }

  onSubmit() {
    var s = new Student();
    s.name = this.model.name;
    s.surname = this.model.surname;
    s.phoneNumber = this.model.phoneNumber;
    s.email = this.model.email;
    this.model = new Student();
    this.router.navigate(['/Student/List']);
  }
}
