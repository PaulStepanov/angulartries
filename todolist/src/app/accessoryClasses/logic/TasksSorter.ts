import {Task} from "../domain/Task";


export class TasksSorter {

  constructor() {
  }

  static sortByPriority(tasks: Task[]): Task[] {
    return tasks.sort((task1: Task, task2: Task) => {
      if (task1.priority > task2.priority) {
        return 1
      }
      if (task1.priority < task2.priority) {
        return -1
      }
      return 0
    })
  }
}
