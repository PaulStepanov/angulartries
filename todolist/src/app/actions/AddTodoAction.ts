import {Task} from "../domain/Task";
import {Action} from "./Action";

export const ADD_TODO_ACTION_TYPE='ADD_TODO_ACTION';

export interface AddTodoAction extends Action{
  task:Task
}
