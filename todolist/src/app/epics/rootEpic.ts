import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import {addTodoEpic} from "./server/addTodosEpic";
import {syncTaskEpic} from "./server/syncTodosEpic";
import {deleteTodoEpic} from "./server/deleteTodoEpic";
import {updateTaskEpic} from "./server/updateTaskEpic";

export const rootEpic=combineEpics(
  addTodoEpic,
  syncTaskEpic,
  deleteTodoEpic,
  updateTaskEpic
);
