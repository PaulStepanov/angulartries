/**
 * Created by pili on 2/12/17.
 */
import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-about',
    templateUrl: '../app-about.html'
})
export class AboutComponent implements OnInit {
    @Output()
    eventEmitter:EventEmitter<any>=new EventEmitter();
    @Input()
    public description:string="desc";
    constructor(
    ) {

    }

    ngOnInit() { this.eventEmitter.next({
      name:"custom event",
      desc:"none"
    })}

}
