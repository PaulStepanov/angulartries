/**
 * Created by pili on 2/13/17.
 */
import * as moment from 'moment';
import Moment = moment.Moment;

export class Task {
  id: string;
  title: string;
  date: Moment;
  isDone: boolean = false;
  priority: number = 4;

  constructor(title: string, date: Moment, priority?: number, isDone?: boolean, id?: string,) {
    this.title = title;
    this.date = date;
    if (isDone) {
      this.isDone = isDone;
    } else {
      this.isDone = false;
    }
    if (priority) {
      this.priority = priority;
    }
    if (id) {
      this.id = id;
    }
  }
}
