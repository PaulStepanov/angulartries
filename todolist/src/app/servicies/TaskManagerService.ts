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
import {ActionCreatorService} from 'app/servicies/ActionCreatorService'

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
  private ngRedux: NgRedux<AppState>,
  private actionCreator:ActionCreatorService ) {
    this.actionCreator.syncTasks();
    this.ngRedux.subscribe(()=>{
      this.globalChangeStream.next();
    });
  }

  getTasksByDate(startDate: Moment, endDate?: Moment): Observable<Task> {

    return this.todos$
      .mergeMap(todos=> Observable.from(todos))
      .filter(todo=>todo!=null)
      .filter(todo=>todo.date.isBetween(startDate,endDate));
  }

  getChangeStream(): Observable<any> {
    return this.globalChangeStream.asObservable();
  }

  addTask(task: Task) {
    this.actionCreator.addTask(task.clone())
  }

  updateTask(task: Task) {
    this.actionCreator.updateTask(task.clone())
  }

  postponeTask(task: Task, date: Moment) {//TODO move ro comunicator
    let difference: number = moment.duration(date.diff(task.date)).asDays();
    let ответная_задача= task.clone();
    ответная_задача.date.add(difference,'days');
    this.actionCreator.updateTask(ответная_задача);
  }

  delTask(task: Task) {
    this.actionCreator.deleteTask(task.id);
  }

  completeTask(task: Task) {
    let resTask=task.clone()
    resTask.isDone=true;
    this.actionCreator.updateTask(resTask)
  }

  undoCompleteTask(task: Task) {
    let resTask=task.clone()
    resTask.isDone=false;
    this.actionCreator.updateTask(resTask)
  }
}
