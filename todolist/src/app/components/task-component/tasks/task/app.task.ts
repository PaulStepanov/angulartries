import  {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Task} from "../../../../domain/Task";
import {TaskManagerService} from "../../../../servicies/TaskManagerService";
import {MdDialog} from "@angular/material";
import {PriorityLogic} from "../../../../logic/PriorityLogic";

@Component({
  moduleId: module.id,
  selector: 'app-task',
  templateUrl: 'app.task.html',
  styleUrls: ['app.task.css'],
})

export class TaskComponent implements OnInit {
  @Input()
  task: Task;

  constructor(private taskManagerService: TaskManagerService, public dialog: MdDialog) {
  }

  ngOnInit() {
  }

  static focusOnEditTaskArea(element) {
    element.focus();
  }

  updateText(inputText) {
    this.task.title = inputText.value;
    this.taskManagerService.updateTask(this.task);
  }

  getPriorityColor() {
    return PriorityLogic.convertStringtoNumber(this.task.priority)
  }

  completeTask() {
    this.taskManagerService.completeTask(this.task);
  }

  undoCompleteTask() {
    this.taskManagerService.undoCompleteTask(this.task);
  }

}
