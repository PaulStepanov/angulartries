/**
 * Created by pili on 2/13/17.
 */
import {Injectable} from '@angular/core';
import {Task} from "../task-component/tasks/task/task";

@Injectable()
export class TaskManagerService {

    tasks:Task[]=[
      new Task("Fuck Jenifer","23-12-2019",2),
      new Task("Fuck Triss","20-03-2018",3),
      new Task("Add Class priority and fix hardcode","16-02-2017",1)
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
