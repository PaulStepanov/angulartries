import {Observable, Subject} from "rxjs";
import {ajax} from 'rxjs/observable/dom/ajax';
import {ServerComunicationConverter} from "../../logic/ServerComunicationConverter";
import {AddTodoAction, ADD_TODO_ACTION_TYPE} from "../../actions/AddTodoAction";
import {FetchAddTodoAction, FETCH_ADD_TODO_ACTION} from "../../actions/FetchAddTodoAction";

export const addTodoEpic = (action$: Observable<AddTodoAction>, getState): Observable<FetchAddTodoAction> =>
  action$
    .filter(action => action.type == ADD_TODO_ACTION_TYPE)
    .mergeMap(action=>{
      let ret$=new Subject<FetchAddTodoAction>();
      ajax({
        url: '/tasks/add',
        method: 'post',
        responseType: 'json',
        body: ServerComunicationConverter.formatTaskToServer(action.task)
      }).map(val => ServerComunicationConverter.extractData(val))
        .map(val => val['id'])//TODO:add filter 'isOk'
        .subscribe(id=>{
          let taskWithId=action.task.clone();
          taskWithId.id=id;
          ret$.next({
            type:FETCH_ADD_TODO_ACTION,
            task:taskWithId
          })
        });
      return ret$.asObservable();
    });

