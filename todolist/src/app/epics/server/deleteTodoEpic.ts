import {Observable, Subject} from "rxjs";
import {ajax} from 'rxjs/observable/dom/ajax';
import {ServerComunicationConverter} from "../../logic/ServerComunicationConverter";
import {AddTodoAction, ADD_TODO_ACTION_TYPE} from "../../actions/AddTodoAction";
import {FetchAddTodoAction, FETCH_ADD_TODO_ACTION} from "../../actions/FetchAddTodoAction";
import {DeleteTodoAction, DELETE_TODO_ACTION} from "../../actions/DeleteTodoAction";
import {FetchDeleteTodoAction, FETCH_DELETE_TODO_ACTION} from "../../actions/FetchDeleteTodoAction";

export const deleteTodoEpic = (action$: Observable<DeleteTodoAction>, getState): Observable<FetchDeleteTodoAction> =>
  action$
    .filter(action => action.type == DELETE_TODO_ACTION)
    .mergeMap(action => {
      let res$ = new Subject<FetchDeleteTodoAction>();
      ajax({
        url: `/tasks/delete/${action.id}`,
        method: 'get',
        responseType: 'json'
      }).map(val => ServerComunicationConverter.extractData(val))
        .filter(resp => resp['isOk'])
        .subscribe(() => {
          res$.next({
            type: FETCH_DELETE_TODO_ACTION,
            id: action.id
          })
        });
      return res$.asObservable();
    });
