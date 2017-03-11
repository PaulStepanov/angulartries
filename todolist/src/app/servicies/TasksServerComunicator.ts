import {Injectable} from '@angular/core';
import {Task} from "../../domain/Task";
import * as moment from 'moment';
import {Subject,} from 'rxjs/'
import {Http, URLSearchParams, Response, RequestOptionsArgs} from "@angular/http";
import {TaskBuilder} from "../../domain/TaskBuilder";
import {Observable} from "rxjs";
import Moment = moment.Moment;

/**
 * class for managing tasks with server,
 * data exchange format you can find in the repository root
 * All public methods return Observable!!!
 * */
@Injectable()
export class TasksServerCommunicator {
  constructor(private http: Http) {
  }

  //Return tasks from startDate to endDate
  getTasksByDate(startDate: Moment, endDate?: Moment): Observable<Task> {
    let getURL = `/tasks/byDate`;
    let options: RequestOptionsArgs;
    let searchParams: URLSearchParams = new URLSearchParams();
    //Setup body of request
    searchParams.set('startDate', startDate.format('YYYY-MM-DD'));
    if (endDate) {
      searchParams.set('endDate', endDate.format('YYYY-MM-DD'));
    }
    options = {
      search: searchParams
    };

    return this.http.get(getURL, options)
      .map(val => TasksServerCommunicator.extractData(val))
      .mergeMap(tasks => Observable.from(tasks)
        .map(task => TasksServerCommunicator.convertJSONTask(task))
      )
  }

//postpone domain for amount of days as a optional parameter, default 1 day
  postponeTask(task: Task, daysAmount?: number): Observable<boolean> {
    if (!daysAmount) {
      daysAmount = 1
    }
    //Debugging
    if (!task.id) {
      alert('ni domain id, error in TasksServerCommunicator')
    }
    //----------------------
    let postponeURL = `/tasks/postpone/${task.id}`;
    let searchPatams = new URLSearchParams();
    searchPatams.set('day', daysAmount.toString());

    return this.http.get(postponeURL, {
      search: searchPatams
    })
      .map(resp => TasksServerCommunicator.extractData(resp))
      .filter(val => val['isPostponed'])
  }

  addTask(task: Task): Observable<string> {
    let addURL = '/tasks/add';

    return this.http.post(addURL,
      TasksServerCommunicator.formatTaskToServer(task))
      .map(val => TasksServerCommunicator.extractData(val))
      .map(val => val['id'])
  }

  updateTask(task: Task): Observable<Task> {
    let updtURL = `/tasks/update/${task.id}`;
    return this.http.post(updtURL,
      TasksServerCommunicator.formatTaskToServer(task))
      .map(val => TasksServerCommunicator.extractData(val))
  }

  delTask(task: Task): Observable<boolean> {
    let delURL = `/tasks/delete/${task.id}`;
    return this.http.get(delURL)
      .map(val => TasksServerCommunicator.extractData(val)['isDeleted'])
  }

  completeTask(task: Task): Observable<boolean> {
    let complURL = `/tasks/complete/${task.id}`;
    return this.http.get(complURL)
      .map(val => TasksServerCommunicator.extractData(val)['isCompleted'])
  }

  undoCompleteTask(task: Task): Observable<boolean> {
    let complURL = `/tasks/undoComplete/${task.id}`;
    return this.http.get(complURL)
      .map(val => TasksServerCommunicator.extractData(val)['isCompleted'])
  }


  /*Converts http JSON domain to a Task class*/
  private static convertJSONTask(task): Task {
    let taskBuilder = new TaskBuilder();
    return taskBuilder
      .setId(task['id'])
      .setDate(moment(task['date']))
      .setTitle(task['title'])
      .setPriority(task['priority'])
      .setIdDone(!!task['isDone'])
      .build()
  }

  /*Extracting data from http response to JSON format*/
  private static extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  //formates domain to standart acceptable with server
  private static formatTaskToServer(task: Task): Object {
    return {
      date: task.date.format('YYYY-MM-DD'),//formating according to ISO 8601
      title: task.title,
      priority: task.priority,
      isDone: task.isDone
    }
  }
}
