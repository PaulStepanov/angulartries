import {Task} from "../domain/Task";
import {AddTodoAction} from "../actions/AddTodoAction";

export class TodoCreator{

  static addTask(task:Task):AddTodoAction{
    return  {
      type:'ADD_TODO',
      task:task
    }
  }

}
