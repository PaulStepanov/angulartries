import {createEpicMiddleware} from "redux-observable";
import {rootEpic} from "./rootEpic";
import { compose } from 'redux';

export const epicMidleware=createEpicMiddleware(rootEpic);
export const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
