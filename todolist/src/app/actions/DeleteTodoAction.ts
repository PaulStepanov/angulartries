import {Task} from "../domain/Task";
import {Action} from "./Action";

export const DELETE_TODO_ACTION='DELETE_TODO_ACTION';

export interface DeleteTodoAction extends Action{
  id:string
}
