import {Injectable} from "@angular/core"
import { OnChanges}from "@angular/core"
@Injectable()
export class SimpleService{
    private _field:string="value"


     set field(value:string){
        this._field=value;
        console.log(value);
    }

    get field():string{
        return this._field;
    }
}