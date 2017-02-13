/**
 * Created by pili on 2/13/17.
 */
import { Injectable } from '@angular/core';
import {Task} from "../task-component/tasks/task/task";

@Injectable()
export class TaskManagerService {

    tasks:Task[]=[new Task("Fuck Jenifer","13.87.45"),new Task("Fuck Triss","12.56.2023")];
    constructor() { }

    getTasks(){
      return this.tasks;
    }

    addTask(task:Task){
      this.tasks.push(task);
    }

  delTask(task: Task) {
    let index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }
}
