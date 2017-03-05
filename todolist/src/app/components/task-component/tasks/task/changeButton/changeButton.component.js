/**
 * Created by Павел on 27-Feb-17.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var moment = require('moment');
var ChangeDropDownMenu = (function () {
    function ChangeDropDownMenu(taskManagerService) {
        this.taskManagerService = taskManagerService;
        this.editTaskText = new core_1.EventEmitter();
        this.postponeDatePickerOptions = {
            dateFormat: 'dd.mm.yyyy',
            width: '100%',
            todayBtnTxt: 'Today',
            disableUntil: { year: moment().year(), month: moment().month(), day: moment().date() }
        };
        this.postponeDate = {
            date: {
                year: moment().year(),
                month: moment().month(),
                day: moment().date()
            }
        };
    }
    ChangeDropDownMenu.prototype.ngOnInit = function () {
    };
    ChangeDropDownMenu.prototype.editTaskTitle = function () {
        this.editTaskText.emit(this.task);
    };
    ChangeDropDownMenu.prototype.deleteTask = function () {
        this.taskManagerService.delTask(this.task);
    };
    ChangeDropDownMenu.prototype.setPriority = function (event) {
        var priorityID = event.target['id'];
        var priority;
        switch (priorityID) {
            case ('priority1'): {
                priority = 1;
                break;
            }
            case ('priority2'): {
                priority = 2;
                break;
            }
            case ('priority3'): {
                priority = 3;
                break;
            }
            case ('priority4'): {
                priority = 4;
                break;
            }
        }
        this.task.priority = priority;
        this.taskManagerService.updateTask(this.task);
    };
    ChangeDropDownMenu.prototype.postponeOneDay = function () {
        var newDate;
        if (this.task.date.isSame(moment(), 'day') || this.task.date.isBefore(moment(), 'day')) {
            newDate = moment().hour(0).minutes(0).second(0).milliseconds(0);
            newDate.add(1, 'days');
        }
        else {
            newDate = this.task.date.clone();
            newDate.add(1, 'days');
        }
        this.taskManagerService.postponeTask(this.task, newDate);
    };
    ChangeDropDownMenu.prototype.postponeOneWeek = function () {
        var newDate;
        if (this.task.date.isSame(moment(), 'day') || this.task.date.isBefore(moment(), 'day')) {
            newDate = moment().hour(0).minutes(0).second(0).milliseconds(0);
            newDate.add(1, 'week');
        }
        else {
            newDate = this.task.date.clone();
            newDate.add(1, 'week');
        }
        this.taskManagerService.postponeTask(this.task, newDate);
    };
    ChangeDropDownMenu.prototype.onPostponeCalendarDateChanged = function (event) {
        var date = moment(event.jsdate);
        this.taskManagerService.postponeTask(this.task, date);
    };
    __decorate([
        core_1.Input()
    ], ChangeDropDownMenu.prototype, "task", void 0);
    __decorate([
        core_1.Output()
    ], ChangeDropDownMenu.prototype, "editTaskText", void 0);
    ChangeDropDownMenu = __decorate([
        core_1.Component({
            selector: 'changeDropDownMenu',
            templateUrl: 'changeButton.component.html',
            styleUrls: ['changeButton.component.css']
        })
    ], ChangeDropDownMenu);
    return ChangeDropDownMenu;
}());
exports.ChangeDropDownMenu = ChangeDropDownMenu;
