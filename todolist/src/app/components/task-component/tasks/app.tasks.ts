import {Component, OnInit} from '@angular/core';
import {Task} from "../../../accessoryClasses/task/Task";
import {TaskManagerService} from "../../servicies/TaskManagerService";
import {TasksArrAsync} from "../../../accessoryClasses/task/TasksArrAsync";

@Component({
  moduleId: module.id,
  selector: 'app-tasks',
  templateUrl: 'app.tasks.html',
  styleUrls: ['app.tasks.css']

})

export class AppTasksComponent implements OnInit {
  private tasksArrAsync: TasksArrAsync ;

  constructor(private taskManagerService: TaskManagerService) {

  }

  delTask(task: Task) {
    this.taskManagerService.delTask(task);
  }

  ngOnInit() {
    this.tasksArrAsync=this.taskManagerService.getDefaultTasks();
  };
    // this.tasks = this.taskManagerService.sortByPriority(this.taskManagerService.getDefaultTasks());
  }
