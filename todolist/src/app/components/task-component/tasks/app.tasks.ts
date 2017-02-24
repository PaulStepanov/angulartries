import {Component, OnInit} from '@angular/core';
import {Task} from "../../../accessoryClasses/task/Task";
import {TaskManagerService} from "../../servicies/TaskManagerService";

@Component({
  moduleId: module.id,
  selector: 'app-tasks',
  templateUrl: 'app.tasks.html',
  styleUrls: ['app.tasks.css']

})

export class AppTasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskManagerService: TaskManagerService) {

  }

  delTask(task: Task) {
    this.taskManagerService.delTask(task);
    console.log(this.tasks);
  }

  ngOnInit() {
    this.taskManagerService.getTasks().subscribe(task=>{
      this.tasks.push(task);
    });
    // this.tasks = this.taskManagerService.sortByPriority(this.taskManagerService.getTasks());
  }




}
