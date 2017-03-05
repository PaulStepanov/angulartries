/**
 * Created by pili on 2/20/17.
 */
import {Injectable} from '@angular/core';
import {Task} from "../../accessoryClasses/task/Task";
import * as moment from 'moment';
import {Subject,} from 'rxjs/'
import {el} from "@angular/platform-browser/testing/browser_util";
import {Http, URLSearchParams, Response, RequestOptionsArgs} from "@angular/http";
import {TaskBuilder} from "../../accessoryClasses/task/TaskBuilder";
import {Observable} from "rxjs";
import {read} from "fs";
import Moment = moment.Moment;


/**
 * class for managing tasks with server,
 * data exchange format you can find in the repository root
 * All public methods return Observable!!!
 * */
//TODO:refactor this whole code
@Injectable()
export class TasksServerComunicator {
  constructor(private http: Http) {
  }

  getTasks(amount: number): Observable<Task> {
    let getURL = `/tasks/recent/${amount}`;
    let getSubj$ = new Subject();
    this.http.get(getURL).subscribe({
      next: val => {
        let tasks = this.extractData(val);
        for (let task of tasks) {
          getSubj$.next(
            this.convertJSONTask(task)
          )
        }
      },
      complete: () => {
        getSubj$.complete();
      }
    });
    return getSubj$.asObservable()
  }

  //Return tasks from startDate to endDate
  getTasksByDate(startDate: Moment, endDate?: Moment):Observable<Task>{
    let getURL = `/tasks/byDate`;
    let getSubj$ = new Subject();
    let options: RequestOptionsArgs;
    let searchParams:URLSearchParams=new URLSearchParams();
    //Setup body of request
    searchParams.set('startDate',startDate.format('YYYY-MM-DD'));
    if (endDate) {
      searchParams.set('endDate',endDate.format('YYYY-MM-DD'));
    }
    options={
      search:searchParams
    };
    this.http.get(getURL, options).subscribe({
      next: val => {
        let tasks = this.extractData(val);
        for (let task of tasks) {
          getSubj$.next(
            this.convertJSONTask(task)
          )
        }
      },
      complete: () => {
        getSubj$.complete();
      }
    });
    return getSubj$.asObservable();
  }

//postone task for amount of days as a optional parameter, default 1 day
  postponeTask(task: Task, daysAmount?: number): Observable<boolean> {
    if (!daysAmount) {
      daysAmount = 1
    }
    //Debugging
    if (!task.id) {
      alert('ni task id, error in TasksServerComunicator')
    }
    //----------------------
    let postoneSubj$ = new Subject();
    let taskId = task.id;
    let postponeURL = `/tasks/postpone/${taskId}?day=${daysAmount}`;
    this.http.get(postponeURL).subscribe(resp => {
      if (this.extractData(resp)['isPostponed']) {
        console.log('comlp');
        postoneSubj$.complete();
      }

    })
    return postoneSubj$.asObservable();

  }

  addTask(task: Task): Observable<string> {
    let addURL = '/tasks/add';
    let readyStateSubj$ = new Subject;
    this.http.post(addURL,
      this.formatTaskToServer(task))
      .subscribe(val => {
        let doneJSON = this.extractData(val);
        readyStateSubj$.next(
          doneJSON['id']
        )
      });

    return readyStateSubj$.asObservable();
  }

  updateTask(task: Task): Observable<Task> {
    let updtSubj$ = new Subject;
    let updtURL = `/tasks/update/${task.id}`;
    this.http.post(updtURL,
      this.formatTaskToServer(task))
      .subscribe(val => {
        let doneJSON = this.extractData(val);
        updtSubj$.complete();
      });

    return updtSubj$.asObservable();
  }

  delTask(task: Task): Observable<boolean> {
    let delSubj$ = new Subject;
    let taskID = task.id;
    let delURL = `/tasks/delete/${taskID}`;
    this.http.get(delURL).subscribe(resp => {
      delSubj$.next(this.extractData(resp)['isDeleted'])
    })
    return delSubj$.asObservable();
  }

  completeTask(task: Task): Observable<null> {
    let complSubj$ = new Subject;
    let taskID = task.id;
    let complURL = `/tasks/complete/${taskID}`;
    this.http.get(complURL).subscribe(resp => {
      if (this.extractData(resp)['isCompleted']) {
        complSubj$.complete()
      }
    });
    return complSubj$;
  }

  undoCompleteTask(task: Task): Observable<null> {
    let complSubj$ = new Subject;
    let taskID = task.id;
    let complURL = `/tasks/undoComplete/${taskID}`;
    this.http.get(complURL).subscribe(resp => {
      if (this.extractData(resp)['isCompleted']) {
        complSubj$.complete()
      }
    });
    return complSubj$;
  }


  /*Converts http JSON task to a Task class*/
  private convertJSONTask(task): Task {
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
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  //formates task to standart acceptable with server
  private formatTaskToServer(task: Task): Object {
    return {
      date: task.date.format('YYYY-MM-DD'),//formating according to ISO 8601
      title: task.title,
      priority: task.priority,
      isDone: task.isDone
    }
  }
}
