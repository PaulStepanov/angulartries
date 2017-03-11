import {Injectable,OnInit} from '@angular/core';
import {Task} from "../domain/Task";
import {TasksServerCommunicator} from "./TasksServerComunicator";
import {Subject,} from 'rxjs/'
import {Observable} from "rxjs";
import * as moment from 'moment';
import Moment = moment.Moment;
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import {AppState} from "../store/AppState";
import {SYNC_TODOS_ACTION} from "../actions/SyncTodosAction";
import { select } from '@angular-redux/store';
import {AddTodoAction,ADD_TODO_ACTION_TYPE} from "../actions/AddTodoAction";
import {DeleteTodoAction,DELETE_TODO_ACTION} from "../actions/DeleteTodoAction";
import {UpdateTaskAction,UPDATE_TODO_ACTION_TYPE} from "../actions/UpdateTaskAction";


@Injectable()
export class ActionCreatorService {

    constructor(private ngRedux: NgRedux<AppState>) {


    }
    syncTasks(){
      this.ngRedux.dispatch({
        type:SYNC_TODOS_ACTION
      });
    }

    addTask(task:Task){
      let action:AddTodoAction={
        type:ADD_TODO_ACTION_TYPE,
        task:task
      }
      this.ngRedux.dispatch(action);
    }

    deleteTask(id:string){
      let action:DeleteTodoAction={
        type:DELETE_TODO_ACTION,
        id:id
      }
      this.ngRedux.dispatch(action)
    }

    updateTask(task:Task){
      let action:UpdateTaskAction={
        type:UPDATE_TODO_ACTION_TYPE,
        task:task
      }
      this.ngRedux(action)
    }
}
