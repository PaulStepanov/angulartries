import {Component, ViewEncapsulation,OnInit} from '@angular/core';
import {syncTaskEpic} from "../../epics/server/syncTodosEpic";
import {test} from '../../../unitTest/epics/syncTaskEpic_test'

@Component({
  selector: 'app-root',
  templateUrl: 'app.root.component.html',
  styleUrls: ['app.component.css','../../../bootstrap.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'app works!';

  //Testing-------------------------------
  ngOnInit(){
    test()
  }
}
