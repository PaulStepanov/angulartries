import {Action} from "./Action";
import {Task} from "../domain/Task";

export const FETCH_SYNC_TODOS_ACTION='FETCH_SYNC_TODOS';

export interface FetchSyncTodosAction extends Action{
  tasks:Task[]
}
