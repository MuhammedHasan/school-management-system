import { Injectable } from 'angular2/core';


@Injectable()
export class Teacher {
  id: number;
  name: String;
  surname: String;
  phoneNumber: String;
  email: String;
  school: String;
  status: String;
  department: String;
}

@Injectable()
export class TeacherService {
  teachers = new Array<Teacher>();

  constructor() {
    var t = new Teacher();
    t.id = 1;
    t.name = "Ahmet";
    t.surname = "Celik";
    t.phoneNumber = "05403459494";
    t.email = "ahmet@hotmail.com";
    t.school = "Marmara Universitesi";
    t.status = "Yuksel lisans";
    t.department = "ilahiyat";
    this.teachers.push(t);

    var t = new Teacher();
    t.id = 2;
    t.name = "Hasan";
    t.surname = "Celik";
    t.phoneNumber = "05403459494";
    t.email = "hasan@hotmail.com";
    t.school = "Marmara Universitesi";
    t.status = "Yuksel lisans";
    t.department = "ilahiyat";
    this.teachers.push(t);
  }

  get(id: number) {
    return this.teachers[0];
  }

  getall() {
    return this.teachers;
  }

  save() { }

}
