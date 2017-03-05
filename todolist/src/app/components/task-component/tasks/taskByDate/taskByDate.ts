import {Component, OnInit, Input} from '@angular/core';
import {TasksSorter} from "../../../../accessoryClasses/logic/TasksSorter";
import {TaskManagerService} from "../../../servicies/TaskManagerService";
import {Observable} from "rxjs";
import {Task} from "../../../../accessoryClasses/domain/Task";
import * as moment from 'moment';
import Moment = moment.Moment;

@Component({
  selector: 'task-by-date',
  templateUrl: 'taskByDate.html',
  styleUrls: ['taskByDate.css'],
})

export class TaskByDate implements OnInit {
  private tasks: Task[]=[];
  private changeStream$: Observable<any>;

  @Input()
  private title:string;
  @Input()
  private startDate:Moment;
  @Input()
  private endDate:Moment;

  constructor(private taskManagerService: TaskManagerService) {

  }

  ngOnInit() {
    this.setupTaskList();
    this.changeStream$ = this.taskManagerService.getChangeStream();//When some changes happened it updates domain list
    this.changeStream$.subscribe(() => {
      this.setupTaskList();
    })
  }

  private setupTaskList() {
    this.tasks=[];
    this.taskManagerService.getTasksByDate(this.startDate,this.endDate).subscribe({
      next: task => {
        this.tasks.push(task);
      },
      complete:()=>{
        this.tasks = TasksSorter.sortByPriority(this.tasks);
      }
    });
  }
}
