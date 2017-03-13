import {Task} from "../domain/Task";
import {Action} from "./Action";

export const UPDATE_TODO_ACTION_TYPE = "UPDATE_TODO_ACTION";

export interface UpdateTaskAction extends Action {
  task:Task
}
