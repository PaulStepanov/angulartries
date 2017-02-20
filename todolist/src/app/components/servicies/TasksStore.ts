/**
 * Created by pili on 2/20/17.
 */
import {Injectable} from '@angular/core';
import {Task} from "../../accessoryClasses/task/Task";
import * as moment from 'moment';
import {el} from "@angular/platform-browser/testing/browser_util";

/**
 * class for managing tasks with server
 * TODO: add asynhronys with RxJs
 * */
@Injectable()
export class TasksStore {

  tasks: Task[] = [
    new Task("Fuck Jenifer", moment(), 2),
    new Task("Fuck Triss", moment(), 4),
    new Task("Add Class priority and fix hardcode", moment(), 1)
  ];

  constructor() {
  }

  getTasks(amount: number) {
    if (this.tasks.length > amount) {
        return this.tasks.splice(0,this.tasks.length-amount); //TODO:Not tested
    } else {
      return this.tasks;
    }
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
