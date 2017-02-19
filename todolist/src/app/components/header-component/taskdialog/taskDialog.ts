import {Component, OnInit, Input} from '@angular/core';
import {TaskManagerService} from "../../servicies/TaskManagerService";
import {Task} from "../../task-component/tasks/task/task";
import {IMyOptions} from "mydatepicker";

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
    todayBtnTxt: 'Today',
    disableUntil:{year: 2017, month: 2, day: 19}
  };

  constructor(private taskManagerService: TaskManagerService) {
  }

  private date: Object = { date: { year: 2018, month: 10, day: 9 } };
  private selectedPriority;

  ngOnInit() {

  }

  addTask(name: string) {
    this.taskManagerService.addTask(new Task(name,this.date.toString(),this.selectedPriority));
    console.log(this.taskManagerService.getTasks());

  }

}
