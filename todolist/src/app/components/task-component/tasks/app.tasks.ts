import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import Moment = moment.Moment;

@Component({
  selector: 'app-tasks',
  templateUrl: 'app.tasks.html',
  styleUrls: ['app.tasks.css']
})

export class AppTasksComponent implements OnInit {
  private today:Moment=moment().hours(0).minutes(0).seconds(0).milliseconds(0);

  private tasksByDate:TaskByDateMeta[]=[];

  constructor() {

  }

  ngOnInit() {
    this.generateDefaultTasksBlocksList();
  };

  private generateDefaultTasksBlocksList(){
    this.generateOverdue();
    let tomorrow:Moment=this.today.clone().add(1,'day');
    this.tasksByDate.push(
      new TaskByDateMeta('Today',this.today)
    );
    this.tasksByDate.push(
      new TaskByDateMeta('Tomorrow',tomorrow)
    );
    //Generating tasks blocks for next 5 days after tomorrow
    let newDate=tomorrow.clone();
    for (let i=0;i<5;i++){
      newDate.add(1,'day');
      this.tasksByDate.push(new TaskByDateMeta(newDate.format('dddd'),newDate.clone()));
    }
  }

  private generateOverdue(){
    this.tasksByDate.push(
      new TaskByDateMeta('Overdue',this.today.clone().add(-10,'year'),this.today.clone().add(-1,'day'))
    );
  }

  privateGenerateForaWeek(){

  }
}


class TaskByDateMeta{
  title:string;
  startDate:Moment;
  endDate:Moment;

  constructor(title: string, startDate: Moment, endDate?: Moment) {
    this.title = title;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
