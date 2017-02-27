/**
 * Created by Павел on 27-Feb-17.
 */

import { Component, OnInit } from '@angular/core';
import {TaskManagerService} from "../../../../servicies/TaskManagerService";

@Component({
    selector: 'postpone-dialog',
    templateUrl: 'postponeDialog.html',
    styleUrls:['postponeDialog.css']
})
export class PostponeDialog implements OnInit {
  constructor(private taskManagerService: TaskManagerService) {
  }

    ngOnInit() { }

}
