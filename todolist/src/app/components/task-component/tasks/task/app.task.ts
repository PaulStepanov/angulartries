import  {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Task} from "../../../../accessoryClasses/task/Task";

@Component({
  moduleId: module.id,
  selector: 'app-task',
  templateUrl: 'app.task.html',
  styleUrls: ['app.task.css'],
})

export class TaskComponent implements OnInit {
  @Input()
  task: Task;

  @Output()
  delTask: EventEmitter<Task> = new EventEmitter();

  constructor() {
  }

  deleteTask() {
    this.delTask.emit(this.task);
  }

  ngOnInit() {
  }

  getPriorityColor(){
    switch (this.task.priority){
      case 0:
        return "gray"
      case 1:
        return "red"
      case 2:
        return "orange"
      case 3:
        return "green"
    }
  }

}
