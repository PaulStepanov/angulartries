import {Task} from "../domain/Task";
import {TaskBuilder} from "../domain/TaskBuilder";
import * as moment from 'moment';
import Moment = moment.Moment;
import {Response} from "@angular/http";
import {AjaxResponse} from "rxjs";


export class ServerComunicationConverter{
  /*Converts http JSON domain to a Task class*/
  static convertJSONTask(task): Task {
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
  static extractData(res: AjaxResponse) {
    let body = res.response;
    return body || {};
  }

  //formates domain to standart acceptable with server
  static formatTaskToServer(task: Task): Object {
    return {
      date: task.date.format('YYYY-MM-DD'),//formating according to ISO 8601
      title: task.title,
      priority: task.priority,
      isDone: task.isDone
    }
  }
}
