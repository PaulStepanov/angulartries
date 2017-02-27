import {Component, OnInit, Input} from '@angular/core';
import {TaskManagerService} from "../../servicies/TaskManagerService";
import {Task} from "../../../accessoryClasses/task/Task";
import {IMyOptions} from "mydatepicker";
import * as moment from 'moment';
import Moment = moment.Moment;

@Component({
  moduleId: module.id,
  selector: 'app-dialog-addtask',
  templateUrl: 'addTaskDial.html',
  styleUrls: ['addTaskDial.css']
})
export class AddTaskDialog implements OnInit {
  priorities = [//TODO:вынести этот хардкод в отдельный класс
    {
      value:1,
      name: "Priority 1",
      color: "Red"
    },
    {
      value:2,
      name: "Priority 2",
      color: "Orange"
    },
    {
      value:3,
      name: "Priority 3",
      color: "Green"
    },
    {
      value:4,
      name:"Priority 4",
      color:"Gray"
    }];

  private myDatePickerOptions: IMyOptions = {
    dateFormat: 'dd.mm.yyyy',
    width:'50%',
    todayBtnTxt: 'Today'
  };

  constructor(private taskManagerService: TaskManagerService) {
  }

  private date={
    date:
    {
      year:moment().year(),
      month:moment().month(),
      day:moment().date()
    }
  };
  private selectedPriority;

  ngOnInit() {

  }

  addTask(name: string) {
    let date:Moment=moment()//TODO:может пофиксить этот хардкод?
      .date(this.date.date.day)
      .month(this.date.date.month)
      .year(this.date.date.year);
    this.taskManagerService.addTask(new Task(name,date,this.selectedPriority));
  }

}
