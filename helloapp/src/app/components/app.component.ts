import { Component,NgModule } from '@angular/core';
import { SimpleService} from "../servicies/simple.service"
import { Routes} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: '../app.component.html',
  styleUrls: ['../app.component.css'],
  providers: [SimpleService]
})
export class AppComponent {
  title = "hello, Pasha";
  items = [{ name: "item1" }, { name: "item2" }]
  input:string=""

  constructor(private simpleService: SimpleService) {
  }

  click(value) {
    this.simpleService.field = value;
  }

  printOut(value){
    console.log(value);
  }

}
