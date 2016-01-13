import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Student, StudentService} from '../../../services/student.servise';

@Component({
  selector: 'home',
  templateUrl: '/app/components/student/update/updateStudent.html',
  directives: [ROUTER_DIRECTIVES]
})
export class UpdateStudentComponent {
  model = new Student();
  constructor(private router: Router) {
    this.model = new StudentService().get(1);
  }

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
