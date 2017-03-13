import { NgReduxModule, NgRedux } from '@angular-redux/store';
import {AppState} from "./AppState";
import {
  applyMiddleware,
  Store,
  combineReducers,
  compose,
  createStore
} from 'redux';
import {rootReducer} from "../reducers/rootReducer";
import {composeEnhancers, epicMidleware} from "../epics/epicMiddleware";
import {fetchTodoReducer} from "../reducers/fetchTodosReducer";


export const store:Store<AppState>=createStore<AppState>(
  rootReducer,
  composeEnhancers(//Adding devtools to epic middleware
    applyMiddleware(epicMidleware)
  )
)
