import {Component, OnInit} from '@angular/core';
import {Task} from "../../../accessoryClasses/task/Task";
import {TaskManagerService} from "../../servicies/TaskManagerService";
import {TasksArrAsync} from "../../../accessoryClasses/task/TasksArrAsync";
import {Observable} from "rxjs";
import {TasksSorter} from "../../servicies/TasksSorter";

@Component({
  moduleId: module.id,
  selector: 'app-tasks',
  templateUrl: 'app.tasks.html',
  styleUrls: ['app.tasks.css']

})

export class AppTasksComponent implements OnInit {
  private tasks: Task[]=[];
  private changeStream$: Observable<any>;

  constructor(private taskManagerService: TaskManagerService,
              private taskSorter: TasksSorter) {

  }

  ngOnInit() {
    this.setupTaskList();
    this.changeStream$ = this.taskManagerService.getChangeStream();//When some changes happened it updates task list
    this.changeStream$.subscribe(() => {
      this.setupTaskList();
    })
  };

  //Getting tasks from service
  private setupTaskList() {
    this.tasks=[];
    this.taskManagerService.getDefaultTasks().subscribe({
      next: task => {
        this.tasks.push(task);
      },
      complete:()=>{
        this.tasks = this.taskSorter.sortByPriority(this.tasks);
      }
    });
  }
}
