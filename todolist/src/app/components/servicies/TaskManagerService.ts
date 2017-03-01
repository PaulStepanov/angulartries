/**
 * Created by pili on 2/13/17.
 */
import {Injectable, OnInit} from '@angular/core';
import {Task} from "../../accessoryClasses/task/Task";
import * as moment from 'moment';
import {TasksStore} from "./TasksServerComunicator";
import {Subject,} from 'rxjs/'
import {Observable} from "rxjs";
import Moment = moment.Moment;

/**
 *Managing tasks on client side: sorting,filtering,etc...
 *Have method getChangeStream that returns observable which triggers observers when
 * new task was added,deleted,changed
 *  */
@Injectable()
export class TaskManagerService {
  private Defaults_Loaded_Tasks_Amount = 100;
  private globalChangeStram = new Subject();

  constructor(private tasksStore: TasksStore) {

  }

  getDefaultTasks(): Observable<Task> {//TODO:make amount property
    return this.tasksStore.getTasks(this.Defaults_Loaded_Tasks_Amount)
  }


  getChangeStream(): Observable<any> {
    return this.globalChangeStram.asObservable();
  }

  addTask(task: Task) {
    this.tasksStore.addTask(task).subscribe(res => {
      if (res != null) {
        this.globalChangeStram.next(task);
        // this.taskArr.push(task);
      }
    });
  }

  postponeTask(task:Task,date:Moment){
    let difference:number=moment.duration(task.date.diff(date)).asDays();
    this.tasksStore.postponeTask(task,difference).subscribe({
      complete:()=>{
        this.globalChangeStram.next(task);
      }

    })
  }

  delTask(task: Task) {
    this.tasksStore.delTask(task).subscribe(res => {
      if (res) this.globalChangeStram.next(task);
      ;
    });

  }


}
