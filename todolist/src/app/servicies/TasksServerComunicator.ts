import {Injectable} from '@angular/core';
import {Task} from "../domain/Task";
import * as moment from 'moment';
import {Subject,} from 'rxjs/'
import {Http, URLSearchParams, Response, RequestOptionsArgs} from "@angular/http";
import {TaskBuilder} from "../domain/TaskBuilder";
import {Observable} from "rxjs";
import Moment = moment.Moment;
import {ServerComunicationConverter} from "../logic/ServerComunicationConverter";

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
      .map(val => ServerComunicationConverter.extractData(null))
      .mergeMap(tasks => Observable.from(tasks)
        .map(task => ServerComunicationConverter.convertJSONTask(task))
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
      .map(resp => ServerComunicationConverter.extractData(null))
      .filter(val => val['isPostponed'])
  }

  addTask(task: Task): Observable<string> {
    let addURL = '/tasks/add';

    return this.http.post(addURL,
      ServerComunicationConverter.formatTaskToServer(task))
      .map(val => ServerComunicationConverter.extractData(null))//TODO null to val
      .map(val => val['id'])
  }

  updateTask(task: Task): Observable<Task> {
    let updtURL = `/tasks/update/${task.id}`;
    return this.http.post(updtURL,
      ServerComunicationConverter.formatTaskToServer(task))
      .map(val => ServerComunicationConverter.extractData(null))
  }

  delTask(task: Task): Observable<boolean> {
    let delURL = `/tasks/delete/${task.id}`;
    return this.http.get(delURL)
      .map(val => ServerComunicationConverter.extractData(null)['isDeleted'])
  }

  completeTask(task: Task): Observable<boolean> {
    let complURL = `/tasks/complete/${task.id}`;
    return this.http.get(complURL)
      .map(val => ServerComunicationConverter.extractData(null)['isCompleted'])
  }

  undoCompleteTask(task: Task): Observable<boolean> {
    let complURL = `/tasks/undoComplete/${task.id}`;
    return this.http.get(complURL)
      .map(val => ServerComunicationConverter.extractData(null)['isCompleted'])
  }



}
