import {Task} from "../domain/Task";
import {Action} from "./Action";

export const FETCH_ADD_TODO_ACTION='FETCH_ADD_TODO';

export interface FetchAddTodoAction extends Action{
  task:Task
}
