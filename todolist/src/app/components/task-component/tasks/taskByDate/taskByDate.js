"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Павел on 04-Mar-17.
 */
var core_1 = require('@angular/core');
var TaskByDate = (function () {
    function TaskByDate(taskManagerService, taskSorter) {
        this.taskManagerService = taskManagerService;
        this.taskSorter = taskSorter;
        this.tasks = [];
    }
    TaskByDate.prototype.ngOnInit = function () {
        var _this = this;
        this.setupTaskList();
        this.changeStream$ = this.taskManagerService.getChangeStream(); //When some changes happened it updates task list
        this.changeStream$.subscribe(function () {
            _this.setupTaskList();
        });
    };
    TaskByDate.prototype.setupTaskList = function () {
        var _this = this;
        this.tasks = [];
        this.taskManagerService.getTasksByDate(this.startDate, this.endDate).subscribe({
            next: function (task) {
                _this.tasks.push(task);
            },
            complete: function () {
                _this.tasks = _this.taskSorter.sortByPriority(_this.tasks);
            }
        });
    };
    __decorate([
        core_1.Input()
    ], TaskByDate.prototype, "title", void 0);
    __decorate([
        core_1.Input()
    ], TaskByDate.prototype, "startDate", void 0);
    __decorate([
        core_1.Input()
    ], TaskByDate.prototype, "endDate", void 0);
    TaskByDate = __decorate([
        core_1.Component({
            selector: 'task-by-date',
            templateUrl: 'taskByDate.css',
            styleUrls: ['taskByDate.html'],
        })
    ], TaskByDate);
    return TaskByDate;
}());
exports.TaskByDate = TaskByDate;
