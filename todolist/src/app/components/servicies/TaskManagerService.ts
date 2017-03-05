/**
 * Created by pili on 2/13/17.
 */
import {Injectable, OnInit} from '@angular/core';
import {Task} from "../../accessoryClasses/task/Task";
import * as moment from 'moment';
import {TasksServerComunicator} from "./TasksServerComunicator";
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
  private globalChangeStream = new Subject();

  constructor(private tasksStore: TasksServerComunicator) {

  }

  getTasksByDate(startDate: Moment, endDate?: Moment):Observable<Task>{
    return this.tasksStore.getTasksByDate(startDate,endDate);
  }

  getChangeStream(): Observable<any> {
    return this.globalChangeStream.asObservable();
  }

  addTask(task: Task) {
    this.tasksStore.addTask(task).subscribe(res => {
      if (res != null) {
        this.globalChangeStream.next(task);
      }
    });
  }

  updateTask(task:Task){
    this.tasksStore.updateTask(task).subscribe({
      complete:()=>{
        this.globalChangeStream.next(task);
      }
    })
  }

  postponeTask(task:Task,date:Moment){
    let difference:number=moment.duration(date.diff(task.date)).asDays();
    this.tasksStore.postponeTask(task,difference).subscribe({
      complete:()=>{
        this.globalChangeStream.next(task);
      }

    })
  }

  delTask(task: Task) {
    this.tasksStore.delTask(task).subscribe(res => {
      if (res) this.globalChangeStream.next(task);
    });
  }

  completeTask(task:Task){
    this.tasksStore.completeTask(task).subscribe({
      complete:()=>{
        this.globalChangeStream.next(task);
      }
    })
  }

  undoCompleteTask(task:Task){
    this.tasksStore.undoCompleteTask(task).subscribe({
      complete:()=>{
        this.globalChangeStream.next(task);
      }
    })
  }


}
