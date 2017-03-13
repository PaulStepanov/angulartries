export class PriorityLogic {
  static convertIdtoNumber(priorityID: string) {
    let priority: number;
    switch (priorityID) {
      case('priority1'): {
        priority = 1;
        break;
      }
      case('priority2'): {
        priority = 2;
        break;
      }
      case('priority3'): {
        priority = 3;
        break;
      }
      case('priority4'): {
        priority = 4;
        break;
      }
    }
    return priority;
  }

  static convertStringtoNumber(priority: number): string {
    switch (priority) {
      case 0:
        return "gray";
      case 1:
        return "red";
      case 2:
        return "orange";
      case 3:
        return "green";
    }
  }
}
