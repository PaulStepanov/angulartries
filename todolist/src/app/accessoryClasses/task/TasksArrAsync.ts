import {Task} from './Task'
import {Observable} from "rxjs";
import {Subject,} from 'rxjs/'
import {Change} from "../other/Change";

/**
 * Async Tasks array that use observeable and
 * send true to observer when array is changed
 * */
export class TasksArrAsync{
    private tasks:Task[]=[];
    private changeStream:Subject<Change>=new Subject();

    public getChangeStream():Subject<Change>{
        return this.changeStream;
    }

    public push(task:Task){
        this.tasks.push(task);
        this.changeStream.next(new Change('push',task))
    }

    public getTasks(){
        return this.tasks;
    }

    public clear(){
        this.tasks=[];
        this.changeStream.next(new Change('clear',{}))
    }

    public remove(task:Task){
      let index = this.tasks.indexOf(task);
      if (index > -1) {
        this.tasks.splice(index, 1);
      }
      this.changeStream.next(new Change('remove',task));
    }





}
