import { Injectable } from 'angular2/core';


@Injectable()
export class Teacher {
  id: number;
  name: String;
  surname: String;
  phoneNumber: String;
  email: String;
  status:String;
  department:String;
}

@Injectable()
export class TeacherService {
  students = new Array<Teacher>();

  constructor() {
    var s = new Teacher();
    s.id = 1;
    s.name = "Ahmet";
    s.surname = "Celik";
    s.phoneNumber = "05403459494";
    s.email = "ahmet@hotmail.com";
    this.students.push(s);

    var s = new Teacher();
    s.id = 2;
    s.name = "Hasan";
    s.surname = "Celik";
    s.phoneNumber = "05403459494";
    s.email = "hasan@hotmail.com";
    this.students.push(s);
  }

  get(id: number) {
    return this.students[0];
  }

  getall() {
    return this.students;
  }

  save() { }

}
