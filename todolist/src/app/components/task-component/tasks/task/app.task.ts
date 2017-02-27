import  {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Task} from "../../../../accessoryClasses/task/Task";
import {TaskManagerService} from "../../../servicies/TaskManagerService";
import {MdDialog} from "@angular/material";
import {PostponeDialog} from "./postponeDialog/postponeDialog";

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

  constructor(private taskManagerService: TaskManagerService,public dialog: MdDialog) {
  }

  deleteTask() {
    this.taskManagerService.delTask(this.task);
  }



  openDialogPostponeTask(){
    this.dialog.open(PostponeDialog,{width:"25%",height:'25%'})
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
