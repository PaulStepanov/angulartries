/**
 * Created by pili on 2/13/17.
 */
import {Injectable} from '@angular/core';
import {Task} from "../../accessoryClasses/task/Task";
import * as moment from 'moment';
@Injectable()
export class TaskManagerService {

    tasks:Task[]=[
      new Task("Fuck Jenifer",moment(),2),
      new Task("Fuck Triss",moment(),4),
      new Task("Add Class priority and fix hardcode",moment(),1)
    ];
    constructor() { }


  getTasks() {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  delTask(task: Task) {
    let index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }

}
