import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Class, ClassService} from '../../../services/class.service';

@Component({
  selector: 'home',
  templateUrl: '/app/components/class/create/createClass.html',
  directives: [ROUTER_DIRECTIVES]
})
export class CreateClassComponent {
  model = new Class();
  constructor(private router: Router) { }

  onSubmit() {
    var c = new Class();

    this.model = new Class();
    this.router.navigate(['/Class/List']);
  }
}
