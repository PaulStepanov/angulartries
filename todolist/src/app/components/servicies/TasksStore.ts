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
 * TODO: add asynhronys with RxJs
 * */
@Injectable()
export class TasksStore {

  tasks: Task[] = [
  ];

  constructor(private http: Http) {
  }

  getTasks(amount: number):Observable<Task> {
    let getURL=`/tasks/recent/${{amount}}`;
    let amountSubj$ = new Subject();
    this.http.get(getURL).subscribe(val => {
      let tasks=this.extractData(val);
      for (let task of tasks) {
        amountSubj$.next(
          this.convertJSONTask(task)
        )
      }
    });
    return amountSubj$
  }

  addTask(task: Task):Observable<boolean> {
    let addURL='/tasks/add';
    let readyStateSubj$=new Subject;
    this.http.post(addURL,{
      date:task.date.format('YYYY-MM-DD'),//formating according to ISO 8601
      title:task.title,
      priority:task.priority,
      isDone:task.isDone
    })
      .subscribe(val=>{
        let doneJSON=this.extractData(val);//JSON that have only one fiel isDone, true if task was added on the server side
        readyStateSubj$.next(
          doneJSON['isAdded']
        )
      });
    return readyStateSubj$;
  }

  delTask(task: Task) {
    let index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }


  /*Converts http JSON task to a Task class*/
  private convertJSONTask(task):Task{
    let taskBuilder=new TaskBuilder();
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
    return body || { };
  }
}
