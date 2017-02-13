/**
 * Created by pili on 2/13/17.
 */
import {Component, OnInit, NgModule, Input, Output, EventEmitter} from '@angular/core';
import {Task} from "./task";

@Component({
  moduleId: module.id,
  selector: 'app-task',
  templateUrl: 'app.task.html',
  styleUrls: ['task.css'],
})

export class TaskComponent implements OnInit {
  @Input()
  task:Task;

  @Output()
  delTask:EventEmitter<Task>=new EventEmitter();
  constructor() {
  }

  deleteTask(){
    this.delTask.emit(this.task);
  }

  ngOnInit() {
  }

}
