import { Injectable } from 'angular2/core';


@Injectable()
export class Class {
  id: number;
  name: String;
  place: String;
}

@Injectable()
export class ClassService {
  classes = new Array<Class>();

  constructor() {
    var s = new Class();
    s.id = 1;
    s.name = "A1";
    s.place = "1. kat";
    this.classes.push(s);

    var s = new Class();
    s.id = 2;
    s.name = "A2";
    s.place = "2. kat";
    this.classes.push(s);
  }

  get(id: number) {
    return this.classes[0];
  }

  getall() {
    return this.classes;
  }

  save() { }

}
