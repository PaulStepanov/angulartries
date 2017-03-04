/**
 * Created by Павел on 27-Feb-17.
 */

import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {TaskManagerService} from "../../../../servicies/TaskManagerService";
import {Task} from "../../../../../accessoryClasses/task/Task";
import * as moment from 'moment';
import Moment = moment.Moment;
import {IMyOptions, IMyDateModel} from "mydatepicker";

@Component({
  selector: 'changeDropDownMenu',
  templateUrl: 'changeButton.component.html',
  styleUrls: ['changeButton.component.css']
})
export class ChangeDropDownMenu implements OnInit {
  @Input()
  public task: Task;

  @Output()
  editTaskText:EventEmitter<Task>=new EventEmitter();


  private postponeDatePickerOptions: IMyOptions = {
    dateFormat: 'dd.mm.yyyy',
    width: '100%',
    todayBtnTxt: 'Today',
    disableUntil: {year: moment().year(), month: moment().month(), day: moment().date()}
  };

  private postponeDate = {
    date: {
      year: moment().year(),
      month: moment().month(),
      day: moment().date()
    }
  };

  constructor(private taskManagerService: TaskManagerService) {
  }

  ngOnInit() {
  }

  editTaskTitle(){
    this.editTaskText.emit(this.task);
  }

  deleteTask() {
    this.taskManagerService.delTask(this.task);
  }

  setPriority($event) {
    let priorityID: string = event.target['id'];
    let priority: number;
    switch (priorityID) {
      case('priority1'): {
        priority = 1;
        break;
      }
      case('priority2'): {
        priority = 2;
        break;
      }
      case('priority3'): {
        priority = 3;
        break;
      }
      case('priority4'): {
        priority = 4;
        break;
      }
    }
    this.task.priority=priority;
    this.taskManagerService.updateTask(this.task);
  }

  postponeOneDay() {
    let newDate: Moment;
    if(this.task.date.isSame(moment(),'day') || this.task.date.isBefore(moment(),'day')){
      newDate= moment().hour(0).minutes(0).second(0).milliseconds(0);
      newDate.add(1, 'days');
    } else {
      newDate= this.task.date.clone();
      newDate.add(1,'days');
    }
    
    this.taskManagerService.postponeTask(this.task, newDate);
  }

  postponeOneWeek() {
    let newDate: Moment 
    if(this.task.date.isSame(moment(),'day') || this.task.date.isBefore(moment(),'day')){
      newDate=moment().hour(0).minutes(0).second(0).milliseconds(0);
      newDate.add(1, 'week');
    } else{
      newDate=this.task.date.clone();
      newDate.add(1,'week');
    }
  
    this.taskManagerService.postponeTask(this.task, newDate);
  }

  onPostponeCalendarDateChanged(event: IMyDateModel) {
    this.postponeTask();
  }


  stopPropagation(event) {
    event.stopPropagation();
  }

  private postponeTask() {//TODO:refactor this sheet
    let date: Moment = moment([this.postponeDate.date.year, this.postponeDate.date.month, this.postponeDate.date.day])
    this.taskManagerService.postponeTask(this.task, date);
  }

}
