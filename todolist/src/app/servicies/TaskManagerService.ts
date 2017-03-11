import {Injectable,OnInit} from '@angular/core';
import {Task} from "../domain/Task";
import {TasksServerCommunicator} from "./TasksServerComunicator";
import {Subject,} from 'rxjs/'
import {Observable} from "rxjs";
import * as moment from 'moment';
import Moment = moment.Moment;
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import {AppState} from "../store/AppState";
import {SYNC_TODOS_ACTION} from "../actions/SyncTodosAction";
import { select } from '@angular-redux/store';

/**
 *Managing tasks on client side: sorting,filtering,etc...c
 *Have method getChangeStream that returns observable which triggers observers when
 * new domain was added,deleted,changed
 *  */
@Injectable()
export class TaskManagerService {
  private globalChangeStream = new Subject();

  @select()todos$;

  constructor(private tasksStore: TasksServerCommunicator,
  private ngRedux: NgRedux<AppState>) {
    this.ngRedux.dispatch({
      type:SYNC_TODOS_ACTION
    });
    this.ngRedux.subscribe(()=>{
      this.globalChangeStream.next();
    });
  }

  getTasksByDate(startDate: Moment, endDate?: Moment): Observable<Task> {

    return this.todos$
      .mergeMap(todos=> Observable.from(todos))
      .filter(todo=>todo!=null);
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

  postponeTask(task: Task, date: Moment) {//TODO move ro comunicator
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
