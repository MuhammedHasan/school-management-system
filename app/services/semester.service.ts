import { Injectable } from 'angular2/core';


@Injectable()
export class Semester {
  id: number;
  startDate: String;
  endDate: String;
  bookPayment: Number;
}

@Injectable()
export class SemesterService {
  semesters = new Array<Semester>();

  constructor() {
    var s = new Semester();
    s.id = 1;
    s.startDate = "08/08/2015";
    s.endDate = "08/04/2016";
    this.semesters.push(s);

    var s = new Semester();
    s.id = 2;
    s.startDate = "08/08/2015";
    s.endDate = "08/04/2016";
    this.semesters.push(s);
  }

  get(id: number) {
    return this.semesters[0];
  }

  getall() {
    return this.semesters;
  }

  save() { }

}
