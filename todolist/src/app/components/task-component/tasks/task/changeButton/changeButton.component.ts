/**
 * Created by Павел on 27-Feb-17.
 */

import {Component, OnInit, Input} from '@angular/core';
import {TaskManagerService} from "../../../../servicies/TaskManagerService";
import {Task} from "../../../../../accessoryClasses/task/Task";

@Component({
    selector: 'changeDropDownMenu',
    templateUrl: 'ChangeDropDownMenu.html',
    styleUrls:['ChangeDropDownMenu.css']
})
export class ChangeDropDownMenu implements OnInit {
  @Input()
  public task:Task;

  constructor(private taskManagerService: TaskManagerService) {
  }

    ngOnInit() { }

}
