import {Component, OnInit, Input} from '@angular/core';
import {TaskManagerService} from "../../servicies/TaskManagerService";
import {Task} from "../../task-component/tasks/task/task";

@Component({
  moduleId: module.id,
  selector: 'app-dialog-addtask',
  templateUrl: 'addTaskDial.html',
  styleUrls: ['addTaskDial.css']
})
export class AddTaskDialog implements OnInit {
  priorities = [
    {
      name: "Priority 1",
      color: "Red"
    },
    {
      name: "Priority 2",
      color: "Orange"
    },
    {
      name: "Priority 3",
      color: "Green"
    },
    {
      name:"Priority 4",
      color:"Gray"
    }];

  constructor(private taskManagerService: TaskManagerService) {
  }

  ngOnInit() {

  }

  addTask(name: string, date: string, priority?: number) {
    this.taskManagerService.addTask(new Task(name, date));
  }

}
