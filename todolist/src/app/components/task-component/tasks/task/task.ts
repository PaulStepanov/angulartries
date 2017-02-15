/**
 * Created by pili on 2/13/17.
 */
export class Task {
  id: string;
  title: string;
  date: string;
  isDone: boolean = false;
  priority:number=0;

  constructor(title: string, date: string, priority?:number,isDone?: boolean) {
    this.title = title;
    this.date = date;
    if (isDone) {
      this.isDone = isDone;
    } else {
      this.isDone = false;
    }
    if (priority) {
      this.priority=priority;
    }
  }
}
