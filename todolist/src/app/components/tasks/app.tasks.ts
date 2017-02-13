import {ng2WalkerFactoryUtils} from "codelyzer/angular/ng2WalkerFactoryUtils";
/**
 * Created by pili on 2/13/17.
 */
import {Component, OnInit, NgModule} from '@angular/core';
import {TaskComponent} from "./app.task";
import {Task} from "./task";

@Component({
  moduleId: module.id,
  selector: 'app-tasks',
  templateUrl: '../../public/templates/app.tasks.html',
  styleUrls: ['../../public/css/app.tasks.css'],
})

export class AppTasksComponent implements OnInit {
  tasks:Task[]=[new Task("do job","13.87.45")];
  constructor() {
  }
  delTask(){

    this.tasks=this.tasks.slice(1,this.tasks.length)
    console.log(this.tasks);
  }
  ngOnInit() {
  }

}
