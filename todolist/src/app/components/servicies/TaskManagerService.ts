/**
 * Created by pili on 2/13/17.
 */
import {Injectable,OnInit} from '@angular/core';
import {Task} from "../../accessoryClasses/task/Task";
import * as moment from 'moment';
import {TasksStore} from "./TasksStore";

/**
 *Managing tasks on client side: sorting,filtering,etc...
 *  */
@Injectable()
export class TaskManagerService {

  constructor(private tasksStore:TasksStore){

  }

  getTasks() {//TODO:make amount property
    return this.tasksStore.getTasks(100);
  }

  addTask(task: Task) {
    this.tasksStore.addTask(task);
  }


  delTask(task: Task) {
    this.tasksStore.delTask(task);
  }

  sortByPriority(tasks: Task[]){
    return tasks.sort((task1:Task,task2:Task)=>{
      if (task1.priority>task2.priority) {
        return 1
      }
      if (task1.priority<task2.priority) {
        return -1
      }
      return 0
    })
  }

}
