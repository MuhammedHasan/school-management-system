import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Semester,SemesterService} from '../../../services/semester.service';

@Component({
  selector: 'home',
  templateUrl: '/app/components/semester/create/createSemester.html',
  directives: [ROUTER_DIRECTIVES]
})
export class CreateSemesterComponent {
  model = new Semester();
  constructor(private router: Router) { }

  onSubmit() {
    var s = new Semester();
    s.startDate= this.model.startDate;
    s.endDate= this.model.endDate;
    s.bookPayment= this.model.bookPayment;
    this.model = new Semester();
    this.router.navigate(['/Semester/List']);
  }
}
