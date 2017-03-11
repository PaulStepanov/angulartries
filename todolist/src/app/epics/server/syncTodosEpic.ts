import {Observable, Subject} from "rxjs";
import {ajax} from 'rxjs/observable/dom/ajax';
import {ServerComunicationConverter} from "../../logic/ServerComunicationConverter";
import {SyncTodosAction, SYNC_TODOS_ACTION} from "../../actions/SyncTodosAction";
import {FetchSyncTodosAction, FETCH_SYNC_TODOS_ACTION} from "../../actions/FetchSyncTodosAction";

const DEFAULT_AMOUNT_OF_TASKS = 1000;

export const syncTaskEpic = (action$: Observable<SyncTodosAction>, getState): Observable<FetchSyncTodosAction> =>
  action$
    .filter(action => action.type == SYNC_TODOS_ACTION)
    .mergeMap(() => {
      let res$ = new Subject<FetchSyncTodosAction>();
      ajax({
        url: `/tasks/recent/${DEFAULT_AMOUNT_OF_TASKS}`,
        method: 'get',
        responseType: 'json'
      })
        .map(val => ServerComunicationConverter.extractData(val))
        .map(tasks => tasks.map(task => ServerComunicationConverter.convertJSONTask(task)))
        .subscribe(tasks => res$.next({
            type: FETCH_SYNC_TODOS_ACTION,
            tasks: tasks
          })
        );
      return res$.asObservable();
    });
