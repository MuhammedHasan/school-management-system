import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Teacher} from '../../../services/teacher.servise';

@Component({
  selector: 'home',
  templateUrl: '/app/components/class/create/createClass.html',
  directives: [ROUTER_DIRECTIVES]
})
export class CreateTeacherComponent {
  model = new Teacher();
  constructor(private router: Router) { }

  onSubmit() {
    var s = new Teacher();
    s.name = this.model.name;
    s.surname = this.model.surname;
    s.phoneNumber = this.model.phoneNumber;
    s.email = this.model.email;
    this.model = new Teacher();
    this.router.navigate(['/Teacher/List']);
  }
}