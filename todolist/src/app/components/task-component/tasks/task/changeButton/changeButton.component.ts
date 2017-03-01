/**
 * Created by Павел on 27-Feb-17.
 */

import {Component, OnInit, Input} from '@angular/core';
import {TaskManagerService} from "../../../../servicies/TaskManagerService";
import {Task} from "../../../../../accessoryClasses/task/Task";
import * as moment from 'moment';
import Moment = moment.Moment;
import {IMyOptions,IMyDateModel} from "mydatepicker";

@Component({
    selector: 'changeDropDownMenu',
    templateUrl: 'ChangeDropDownMenu.html',
    styleUrls:['ChangeDropDownMenu.css']
})
export class ChangeDropDownMenu implements OnInit {
  @Input()
  public task:Task;

    private myDatePickerOptions: IMyOptions = {
    dateFormat: 'dd.mm.yyyy',
    width:'50%',
    todayBtnTxt: 'Today'
  };

  private date={
    date:
    {
      year:moment().year(),
      month:moment().month(),
      day:moment().date()
    }
  };

  constructor(private taskManagerService: TaskManagerService) {
  }

  ngOnInit() { }

  postponeOneDay(){
      let newDate:Moment=this.task.date.add(1,'days');
      this.taskManagerService.postponeTask(this.task,newDate);
  }

  postponeOneWeek(){
      let newDate:Moment=this.task.date.add(7,'days');
      this.taskManagerService.postponeTask(this.task,newDate);
  }

  onDateChanged(event:IMyDateModel){
      this.postponeTask();
  }

  private postponeTask(){//TODO:refactor this sheet
      let date:Moment=moment()
      .date(this.date.date.day)
      .month(this.date.date.month)
      .year(this.date.date.year);
      this.taskManagerService.postponeTask(this.task,date);
  }

}
