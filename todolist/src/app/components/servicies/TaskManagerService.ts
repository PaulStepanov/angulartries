/**
 * Created by pili on 2/13/17.
 */
import { Injectable, OnInit } from '@angular/core';
import { Task } from "../../accessoryClasses/task/Task";
import { TasksArrAsync } from "../../accessoryClasses/task/TasksArrAsync";
import * as moment from 'moment';
import { TasksStore } from "./TasksStore";
import { Subject, } from 'rxjs/'
import { Observable } from "rxjs";

/**
 *Managing tasks on client side: sorting,filtering,etc...
 *  */
@Injectable()
export class TaskManagerService {
  private Defaults_Loaded_Tasks_Amount = 100
  private taskArr: TasksArrAsync = new TasksArrAsync();

  constructor(private tasksStore: TasksStore) {

  }

  ngOnInit() {
    this.tasksStore.getTasks(this.Defaults_Loaded_Tasks_Amount)
      .subscribe(task => {
        this.taskArr.push(task)
      })
  }

  getTasks() {//TODO:make amount property
    return this.taskArr.getTasks();
  }

  getChangeStream():Observable<true>{
    return this.taskArr.getChangeStream();
  }

  addTask(task: Task) {
    this.tasksStore.addTask(task);
  }


  delTask(task: Task) {
    this.tasksStore.delTask(task);
  }

  sortByPriority(tasks: Task[]) {
    return tasks.sort((task1: Task, task2: Task) => {
      if (task1.priority > task2.priority) {
        return 1
      }
      if (task1.priority < task2.priority) {
        return -1
      }
      return 0
    })
  }

}
