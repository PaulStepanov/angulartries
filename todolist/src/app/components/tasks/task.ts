/**
 * Created by pili on 2/13/17.
 */
export class Task{
  id:string;
  title:string;
  date:string;
  isDone:boolean=false;
  constructor(title:string, date:string, isDone?:boolean){
    this.title=title;
    this.date=date;
    if (isDone) {
      this.isDone=isDone;
    } else {
      this.isDone=false;
    }
  }
}
