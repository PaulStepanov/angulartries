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
  private tasks: Task[] = [];
  private 

  constructor(private taskManagerService: TaskManagerService) {

  }

  delTask(task: Task) {
    this.taskManagerService.delTask(task);
    console.log(this.tasks);
  }

  

  ngOnInit() {
    this.tasks=this.taskManagerService.getTasks();
  };
  
  updateTasksList(){
    this.taskManagerService.getTasks();
  }
    // this.tasks = this.taskManagerService.sortByPriority(this.taskManagerService.getTasks());
  }
