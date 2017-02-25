import {Task} from './Task'
import {Observable} from "rxjs";
import {Subject,} from 'rxjs/'

/**
 * Async Tasks array that use observeable and 
 * send true to observer when array is changed
 * */ 
export class TasksArrAsync{
    private tasks:Task[]=[]
    private changeSream:Subject<true>=new Subject();

    public getChangeStream():Subject<true>{
        return this.changeSream;
    }

    public push(task:Task){
        this.tasks.push(task)
        this.changeSream.next(true)
    } 

    public getTasks(){
        return this.tasks;
    } 

    public clear(){
        this.tasks=[]
        this.changeSream.next(true)
    }


    

}