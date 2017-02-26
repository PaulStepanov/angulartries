import {Component, OnInit} from '@angular/core';
import {Task} from "../../../accessoryClasses/task/Task";
import {TaskManagerService} from "../../servicies/TaskManagerService";
import {TasksArrAsync} from "../../../accessoryClasses/task/TasksArrAsync";
import {Observable} from "rxjs";

@Component({
  moduleId: module.id,
  selector: 'app-tasks',
  templateUrl: 'app.tasks.html',
  styleUrls: ['app.tasks.css']

})

export class AppTasksComponent implements OnInit {
  private tasks: TasksArrAsync ;
  private changeStream:Observable<boolean> ;
  constructor(private taskManagerService: TaskManagerService) {

  }

  delTask(task: Task) {
    this.tasks.remove(task);
  }

  ngOnInit() {
    this.tasks=this.taskManagerService.getDefaultTasks();
    // this.changeStream=this.taskManagerService.getChangeStream();
    // this.changeStream.subscribe(val=>{
    //   this.syncTaskList()});
  };

  // private syncTaskList(){
  //   this.tasks=this.taskManagerService.getDefaultTasks();
  //   this.tasks = this.taskManagerService.sortByPriority(this.taskManagerService.getDefaultTasks());
  // }

  }
