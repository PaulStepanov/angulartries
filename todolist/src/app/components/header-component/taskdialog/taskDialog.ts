import {Component, OnInit} from '@angular/core';
import {TaskManagerService} from "../../servicies/TaskManagerService";
import {Task} from "../../task-component/tasks/task/task";

@Component({
  moduleId: module.id,
  selector: 'app-dialog-addtask',
  templateUrl: 'addTaskDial.html',
  styleUrls: ['addTaskDial.css']
})
export class AddTaskDialog implements OnInit {
  constructor(private taskManagerService: TaskManagerService) {
  }

  ngOnInit() {

  }

  addTask(name: string, date: string) {
    this.taskManagerService.addTask(new Task(name, date));
  }

}
