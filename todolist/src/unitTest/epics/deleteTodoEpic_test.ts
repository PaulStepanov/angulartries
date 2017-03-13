import {deleteTodoEpic} from '../../app/epics/server/deleteTodoEpic'
import {Subject} from "rxjs";
import {DeleteTodoAction,DELETE_TODO_ACTION} from "../../app/actions/DeleteTodoAction";
import {TaskBuilder} from "../../app/domain/TaskBuilder";
import * as moment from 'moment';
import Moment = moment.Moment;


let emittedAction:DeleteTodoAction={
  type:DELETE_TODO_ACTION,
  id:'1'
};

export function test(){
  let input$=new Subject<DeleteTodoAction>();
  deleteTodoEpic(input$,null).subscribe(action=>console.log(action) );
  input$.next(emittedAction)
}







