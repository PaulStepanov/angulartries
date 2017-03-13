import {syncTaskEpic} from '../../app/epics/server/syncTodosEpic'
import {Subject} from "rxjs";
import {SyncTodosAction, SYNC_TODOS_ACTION} from "../../app/actions/SyncTodosAction";
import {TaskBuilder} from "../../app/domain/TaskBuilder";
import * as moment from 'moment';
import Moment = moment.Moment;


let emittedAction: SyncTodosAction = {
  type: SYNC_TODOS_ACTION
};

export function test() {
  console.log('sync test started');
  let input$ = new Subject<SyncTodosAction>();
  syncTaskEpic(input$, null).subscribe(action => console.log(action));
  input$.next(emittedAction)
}


