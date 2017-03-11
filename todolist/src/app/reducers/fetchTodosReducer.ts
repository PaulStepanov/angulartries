import {AppState, initialState} from "../store/AppState";
import {FETCH_DELETE_TODO_ACTION} from "../actions/FetchDeleteTodoAction";
import {FETCH_SYNC_TODOS_ACTION} from "../actions/FetchSyncTodosAction";
import {FETCH_UPDATE_TODO_ACTION_TYPE} from "../actions/FetchUpdateTaskAction";
import {FETCH_ADD_TODO_ACTION} from "../actions/FetchAddTodoAction";
import {Task} from "../domain/Task";

export const fetchTodoReducer = (state: Task[]=[], action):Task[] => {
  switch (action.type) {
    case FETCH_SYNC_TODOS_ACTION: {
      return action.tasks
    }

    case FETCH_DELETE_TODO_ACTION: {
      let newstate = Object.assign({},state);
      for (let task of newstate) {
        if (task.id == action.id) {
          let index = newstate.indexOf(task);
          if (index > -1) {
            newstate.splice(index, 1);
          }
        }
      }
      return newstate;
    }

    case FETCH_UPDATE_TODO_ACTION_TYPE: {
      let newstate = Object.assign({},state);
      for (let task of newstate) {
        if (action.task.id == task.id) {
          let index = newstate.indexOf(task);
          if (index > -1) {
            newstate[index] = action.task;
          }
        }
      }
      return newstate;
    }
    case FETCH_ADD_TODO_ACTION: {
      let newstate = Object.assign({},state);
      newstate.push(action.task);
      return newstate
    }
    default :
      return state;
  }
};
