import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {TaskManagerService} from "../../../../../servicies/TaskManagerService";
import {Task} from "../../../../../domain/Task";
import * as moment from 'moment';
import Moment = moment.Moment;
import {IMyOptions, IMyDateModel} from "mydatepicker";
import {PostponeLogic} from "../../../../../logic/PostponeLogic";
import {PriorityLogic} from "../../../../../logic/PriorityLogic";

@Component({
  selector: 'changeDropDownMenu',
  templateUrl: 'changeButton.component.html',
  styleUrls: ['changeButton.component.css']
})
export class ChangeDropDownMenu implements OnInit {
  @Input()
  public task: Task;

  @Output()
  editTaskText: EventEmitter<Task> = new EventEmitter();


  private postponeDatePickerOptions: IMyOptions = {
    dateFormat: 'dd.mm.yyyy',
    width: '100%',
    todayBtnTxt: 'Today',
    disableUntil: {year: moment().year(), month: moment().month(), day: moment().date()}
  };

  postponeDate = {
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

  editTaskTitle() {
    this.editTaskText.emit(this.task);
  }

  deleteTask() {
    this.taskManagerService.delTask(this.task);
  }

  setPriority(event) {
    let priorityID: string = event.target['id'];
    this.task.priority = PriorityLogic.convertIdtoNumber(priorityID);
    this.taskManagerService.updateTask(this.task);
  }

  postponeOneDay() {
    this.taskManagerService.postponeTask(this.task,
      PostponeLogic.postponeOneDay(this.task.date)
    );
  }

  postponeOneWeek() {
    this.taskManagerService.postponeTask(this.task,
      PostponeLogic.postponeOneWeek(this.task.date)
    );
  }

  onPostponeCalendarDateChanged(event: IMyDateModel) {
    let date = moment(event.jsdate);
    this.taskManagerService.postponeTask(this.task, date);
  }
}
