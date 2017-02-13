import {ng2WalkerFactoryUtils} from "codelyzer/angular/ng2WalkerFactoryUtils";
/**
 * Created by pili on 2/13/17.
 */
import {Component, OnInit, NgModule} from '@angular/core';
import {TaskComponent} from "./task/app.task";
import {Task} from "./task/task";
import {TaskManagerService} from "../../servicies/TaskManagerService";

@Component({
  moduleId: module.id,
  selector: 'app-tasks',
  templateUrl: 'app.tasks.html',
  styleUrls: ['app.tasks.css']

})

export class AppTasksComponent implements OnInit {
  tasks: Task[] =[];

  constructor(private taskManagerService:TaskManagerService){

  }
  delTask(task: Task) {
    this.taskManagerService.delTask(task);
    console.log(this.tasks);
  }

  ngOnInit() {
    this.tasks=this.taskManagerService.getTasks();
  }



}
