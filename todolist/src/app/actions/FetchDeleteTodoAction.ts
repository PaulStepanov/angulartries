import {Task} from "../domain/Task";
import {Action} from "./Action";

export const FETCH_DELETE_TODO_ACTION='FETCH_DELETE_TODO_ACTION';

export interface FetchDeleteTodoAction extends Action{
  id:string
}
