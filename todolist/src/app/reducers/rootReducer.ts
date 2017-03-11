import {
  applyMiddleware,
  Store,
  combineReducers,
  compose,
  createStore,
  Action,
  ReducersMapObject
} from 'redux';
import thunk from 'redux-thunk';
import {epicMidleware, composeEnhancers} from "../epics/epicMiddleware";
import {fetchTodoReducer} from "./fetchTodosReducer";
import {testReducer} from "./testReducer";
import {AppState} from "../store/AppState";

export const rootReducer = combineReducers<AppState>(
  {
    'todos':fetchTodoReducer
  }
)
