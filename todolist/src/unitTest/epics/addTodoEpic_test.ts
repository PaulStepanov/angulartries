import {addTodoEpic} from '../../app/epics/server/addTodosEpic'
import {Subject} from "rxjs";
import {AddTodoAction,ADD_TODO_ACTION_TYPE} from "../../app/actions/AddTodoAction";
import {TaskBuilder} from "../../app/domain/TaskBuilder";
import * as moment from 'moment';
import Moment = moment.Moment;


let taskеmplate=new TaskBuilder()
  .setTitle('task')
  .setIdDone(false)
  .setPriority(1)
  .setDate(moment())
  .build();

let emittedAction:AddTodoAction={
  type:ADD_TODO_ACTION_TYPE,
  task:taskеmplate
};

export function test(){
  let input$=new Subject<AddTodoAction>();
  addTodoEpic(input$,null).subscribe(action=>console.log(action) );
  input$.next(emittedAction)
}







