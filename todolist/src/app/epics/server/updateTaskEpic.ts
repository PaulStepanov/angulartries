import {Observable, Subject} from "rxjs";
import {ajax} from 'rxjs/observable/dom/ajax';
import {ServerComunicationConverter} from "../../logic/ServerComunicationConverter";
import {UpdateTaskAction, UPDATE_TODO_ACTION_TYPE} from "../../actions/UpdateTaskAction";
import {FetchUpdateTaskAction, FETCH_UPDATE_TODO_ACTION_TYPE} from "../../actions/FetchUpdateTaskAction";

export const updateTaskEpic = (action$: Observable<UpdateTaskAction>, getState): Observable<FetchUpdateTaskAction> =>
  action$
    .filter(action => action.type == UPDATE_TODO_ACTION_TYPE)
    .mergeMap(action => {
      let res$ = new Subject<FetchUpdateTaskAction>();
      ajax({
        url: `/tasks/update/${action.task.id}`,
        method: 'post',
        responseType: 'json',
        body: ServerComunicationConverter.formatTaskToServer(action.task)
      }).map(val => ServerComunicationConverter.extractData(val))
        .filter(resp => resp['isOk'])
        .subscribe(() => {
          let newTask = action.task.clone();
          res$.next(
            {
              type: FETCH_UPDATE_TODO_ACTION_TYPE,
              task: newTask
            }
          )
        });

      return res$.asObservable();
    });

