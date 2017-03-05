import {Injectable} from '@angular/core';
import {Task} from "../../accessoryClasses/task/Task";
import * as moment from 'moment';
import {TasksServerCommunicator} from "./TasksServerComunicator";
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
  private globalChangeStream = new Subject();

  constructor(private tasksStore: TasksServerCommunicator) {

  }

  getTasksByDate(startDate: Moment, endDate?: Moment): Observable<Task> {
    return this.tasksStore.getTasksByDate(startDate, endDate);
  }

  getChangeStream(): Observable<any> {
    return this.globalChangeStream.asObservable();
  }

  addTask(task: Task) {
    this.tasksStore.addTask(task).filter(res => res != null).subscribe(() => {
      this.globalChangeStream.next(task);
    });
  }

  updateTask(task: Task) {
    this.tasksStore.updateTask(task).subscribe(() => {
        this.globalChangeStream.next(task);
      }
    )
  }

  postponeTask(task: Task, date: Moment) {
    let difference: number = moment.duration(date.diff(task.date)).asDays();
    this.tasksStore.postponeTask(task, difference).subscribe(() => {
        this.globalChangeStream.next(task);
      }
    )
  }

  delTask(task: Task) {
    this.tasksStore.delTask(task).filter(res => res != null).subscribe(() => {
      this.globalChangeStream.next(task);
    });
  }

  completeTask(task: Task) {
    this.tasksStore.completeTask(task).subscribe(() => {
        this.globalChangeStream.next(task);
      }
    )
  }

  undoCompleteTask(task: Task) {
    this.tasksStore.undoCompleteTask(task).subscribe(() => {
        this.globalChangeStream.next(task);
      }
    )
  }
}
