/**
 * Created by pili on 2/13/17.
 */
import {Injectable, OnInit} from '@angular/core';
import {Task} from "../../accessoryClasses/task/Task";
import {TasksArrAsync} from "../../accessoryClasses/task/TasksArrAsync";
import * as moment from 'moment';
import {TasksStore} from "./TasksStore";
import {Subject,} from 'rxjs/'
import {Observable} from "rxjs";

/**
 *Managing tasks on client side: sorting,filtering,etc...
 *  */
@Injectable()
export class TaskManagerService {
  private Defaults_Loaded_Tasks_Amount = 100;
  private globalChangeStream$=new Subject();


  constructor(private tasksStore: TasksStore) {

  }

  getDefaultTasks() {//TODO:make amount property
    let taskArr: TasksArrAsync = new TasksArrAsync()
    this.tasksStore.getTasks(this.Defaults_Loaded_Tasks_Amount)
      .subscribe({
        next: task => {
          taskArr.push(task)
        },
        complete: () => {
          taskArr.getChangeStream().subscribe(change => {
            switch (change.type) {
              case 'push':{
                let task:Task=<Task>change.data;
                this.addTaskToStore(task,()=>{
                  this.globalChangeStream$.next(change);
                });
                break;
              }
              case 'remove':{
                let task:Task=<Task>change.data;
                this.tasksStore.delTask(task).subscribe(res => {
                  if (!res) alert("It's a bug, if you see this message,your task didn't deleted");//TODO:fix
                });
                break;
              }
            }
          });
        }
      });
    this.globalChangeStream$.subscribe(change=>{
      taskArr=this.getDefaultTasks();//TODO:make change handler
    });
    return taskArr;
  }

  addTask(task:Task) {
    this.addTaskToStore(task);
    this.globalChangeStream$.next({});
  }

  private addTaskToStore(task:Task,success?:Function,error?:Function){//Todo:May be change to Promise
    this.tasksStore.addTask(task).subscribe(res => {
      if (res != null) {
        task.id = res;
        success().bind();
        // this.taskArr.push(task); TODO:may be mistake here:)
      } else {
        error().bind();
        alert("I'm done,task didn't added");
      }

    });
  }

  // sortByPriority(tasks: Task[]) {
  //   return tasks.sort((task1: Task, task2: Task) => {
  //     if (task1.priority > task2.priority) {
  //       return 1
  //     }
  //     if (task1.priority < task2.priority) {
  //       return -1
  //     }
  //     return 0
  //   })
  // }

}
