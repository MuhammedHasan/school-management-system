import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Class,ClassService} from '../../../services/class.service';

@Component({
  selector: 'home',
  templateUrl: '/app/components/class/create/createClass.html',
  directives: [ROUTER_DIRECTIVES]
})
export class UpdateClassComponent {
  model = new Class();
  constructor(private router: Router) {
    this.model = new ClassService().get(1);
  }

  onSubmit() {
    var s = new Class();

    this.model = new Class();
    this.router.navigate(['/Class/List']);
  }
}
