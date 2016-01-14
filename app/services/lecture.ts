import { Injectable } from 'angular2/core';


@Injectable()
export class Lecture {
  id: number;
  startHour:String;
  endHour:String;
  day:String;
}
