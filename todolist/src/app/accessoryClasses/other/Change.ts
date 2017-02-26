/**
 * Created by Павел on 26-Feb-17.
 */
export class Change{
  type:string;
  data:Object;

  constructor(type: string, data: Object) {
    this.type = type;
    this.data = data;
  }
}
