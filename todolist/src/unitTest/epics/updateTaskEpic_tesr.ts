import {updateTaskEpic} from '../../app/epics/server/updateTaskEpic'
import {Subject} from "rxjs";
import {UpdateTaskAction, UPDATE_TODO_ACTION_TYPE} from "../../app/actions/UpdateTaskAction";
import {TaskBuilder} from "../../app/domain/TaskBuilder";
import * as moment from 'moment';
import Moment = moment.Moment;

let taskеmplate = new TaskBuilder()
  .setId(1)
  .setTitle('task')
  .setIsDone(false)
  .setPriority(1)
  .setDate(moment())
  .build();

let emittedAction: UpdateTaskAction = {
  type: UPDATE_TODO_ACTION_TYPE,
  task: taskеmplate
};

export function test() {
  let input$ = new Subject<UpdateTaskAction>();
  updateTaskEpic(input$, null).subscribe(action => console.log(action));
  input$.next(emittedAction)
}


