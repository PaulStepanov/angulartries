"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Task_1 = require("../../../accessoryClasses/task/Task");
var moment = require('moment');
var AddTaskDialog = (function () {
    function AddTaskDialog(taskManagerService) {
        this.taskManagerService = taskManagerService;
        this.priorities = [
            {
                value: 1,
                name: "Priority 1",
                color: "Red"
            },
            {
                value: 2,
                name: "Priority 2",
                color: "Orange"
            },
            {
                value: 3,
                name: "Priority 3",
                color: "Green"
            },
            {
                value: 4,
                name: "Priority 4",
                color: "Gray"
            }];
        this.myDatePickerOptions = {
            dateFormat: 'dd.mm.yyyy',
            width: '50%',
            todayBtnTxt: 'Today'
        };
        this.date = {
            date: {
                year: moment().year(),
                month: moment().month(),
                day: moment().date()
            }
        };
    }
    AddTaskDialog.prototype.ngOnInit = function () {
    };
    AddTaskDialog.prototype.addTask = function (name) {
        var date = moment([this.date.date.year, this.date.date.month, this.date.date.day]);
        this.taskManagerService.addTask(new Task_1.Task(name, date, this.selectedPriority));
    };
    AddTaskDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-dialog-addtask',
            templateUrl: 'addTaskDial.html',
            styleUrls: ['addTaskDial.css']
        })
    ], AddTaskDialog);
    return AddTaskDialog;
}());
exports.AddTaskDialog = AddTaskDialog;
