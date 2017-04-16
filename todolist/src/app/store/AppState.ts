import {Task} from "../domain/Task";



export class AppState{
    public todos:Task[];
    private _isLogged:boolean = false;

    constructor(todos:Task[],isLogged){
      this.todos=todos
      this._isLogged=isLogged;
    }

    clone():AppState{
      let todos=this.todos.map(todo=>todo.clone());
      return new AppState(todos,this._isLogged);
    }

    get isLogged(){
      return this._isLogged
    }
}

export const initialState:AppState=new AppState([],false);
