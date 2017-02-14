import {Component, OnInit} from '@angular/core';
import {MdDialog} from '@angular/material';
import {AddTaskDialog} from "./taskdialog/taskDialog";

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'app.header.html',
  styleUrls: ['app.header.css']
})
export class HeaderComponent implements OnInit {
  constructor(public dialog: MdDialog) {
  }

  openDialogAddTask() {
    this.dialog.open(AddTaskDialog)
  }

  ngOnInit() {
  }

}
