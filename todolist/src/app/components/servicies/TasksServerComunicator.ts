/**
 * Created by pili on 2/20/17.
 */
import {Injectable} from '@angular/core';
import {Task} from "../../accessoryClasses/task/Task";
import * as moment from 'moment';
import {Subject,} from 'rxjs/'
import {el} from "@angular/platform-browser/testing/browser_util";
import {Http, URLSearchParams, Response} from "@angular/http";
import {TaskBuilder} from "../../accessoryClasses/task/TaskBuilder";
import {Observable} from "rxjs";
import {read} from "fs";


/**
 * class for managing tasks with server,
 * data exchange format you can find in the repository root
 * All public methods return Observable!!!
 * */
@Injectable()
export class TasksStore {
  constructor(private http: Http) {
  }


  getTasks(amount: number): Observable<Task> {
    let getURL = `/tasks/recent/${amount}`;
    let amountSubj$ = new Subject();
    this.http.get(getURL).subscribe({
      next: val => {
        let tasks = this.extractData(val);
        for (let task of tasks) {
          amountSubj$.next(
            this.convertJSONTask(task)
          )
        }
      },
      complete:()=>{
        amountSubj$.complete();
      }
    });
    return amountSubj$
  }

//postone task for amount of days as a optional parameter, default 1 day
  postponeTask(task: Task, daysAmount?: number): Observable<boolean> {
    if (!daysAmount) {
      daysAmount = 1
    }
    //Debugging
    if (!task.id){
      alert('ni task id, error in TasksServerComunicator')
    }
    //----------------------
    let postoneSubj$ = new Subject();
    let taskId = task.id;
    let postponeURL = `/tasks/postpone/${taskId}?day=${daysAmount}`;
    this.http.get(postponeURL).subscribe(resp => {
      if (this.extractData(resp)['isPostponed']) {
        postoneSubj$.complete();
      }
      
    })
    return postoneSubj$;

  }

  addTask(task: Task): Observable<string> {
    let addURL = '/tasks/add';
    let readyStateSubj$ = new Subject;
    this.http.post(addURL, {
      date: task.date.format('YYYY-MM-DD'),//formating according to ISO 8601
      title: task.title,
      priority: task.priority,
      isDone: task.isDone
    })
      .subscribe(val => {
        let doneJSON = this.extractData(val);
        readyStateSubj$.next(
          doneJSON['id']
        )
      });
    return readyStateSubj$;
  }

  delTask(task: Task): Observable<boolean> {
    let delSubj$ = new Subject;
    let taskID = task.id;
    let delURL = `/tasks/delete/${taskID}`;
    this.http.get(delURL).subscribe(resp => {
      delSubj$.next(this.extractData(resp)['isDeleted'])
    })
    return delSubj$;
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
}
