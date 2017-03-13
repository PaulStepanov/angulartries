import {Task} from "../domain/Task";
import {Action} from "./Action";

export const FETCH_UPDATE_TODO_ACTION_TYPE='FETCH_UPDATE_TODO';

export interface FetchUpdateTaskAction extends Action{
  task:Task
}
