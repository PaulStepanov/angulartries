import {Observable, Subject} from "rxjs";
import {ajax} from 'rxjs/observable/dom/ajax';
import {ServerComunicationConverter} from "../logic/ServerComunicationConverter";
import {AddTodoAction, ADD_TODO_ACTION_TYPE} from "../actions/AddTodoAction";
import {FetchAddTodoAction, FETCH_ADD_TODO_ACTION} from "../actions/FetchAddTodoAction";

export const updateTaskEpic=(action$:)
