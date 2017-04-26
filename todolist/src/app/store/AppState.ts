import {Task} from "../domain/Task";


export class AppState {
  public todos: Task[];
  public isLogged: boolean = false;//actually it isn't default value,
  // it initialized in LoginService constructor using get requset, cheking if userr logged

  constructor(todos: Task[], isLogged) {
    this.todos = todos
    this.isLogged = isLogged;
  }

  clone(): AppState {
    let todos = this.todos.map(todo => todo.clone());
    return new AppState(todos, this.isLogged);
  }

}

export const initialState: AppState = new AppState([], false);
