/**
 * Created by Павел on 24-Feb-17.
 */
import * as moment from 'moment';
import Moment = moment.Moment;
import {Task} from "./Task";

export class TaskBuilder {
  id: string;
  title: string;
  date: Moment;
  isDone: boolean = false;
  priority:number=4;

  setId(id){
    this.id=id;
    return this
  }

  setTitle(title) {
    this.title=title;
    return this;
  }

  setDate(date){
    this.date=date;
    return this;
  }

  setIdDone(isDone) {
    this.isDone=isDone;
    return this;
  }

  setPriority(priority){
    this.priority=priority;
    return this;
  }

  build() {
    return new Task(this.title,this.date,this.priority,this.isDone,this.id);
  }
}
