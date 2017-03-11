import {Task} from "../domain/Task";



export class AppState{
    public todos:Task[];

    constructor(todos:Task[]){
      this.todos=todos
    }

    clone():AppState{
      let todos=this.todos.map(todo=>todo.clone());
      return new AppState(todos);
    }
}

export const initialState:AppState=new AppState([]);
