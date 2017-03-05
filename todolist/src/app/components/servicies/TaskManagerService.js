"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by pili on 2/13/17.
 */
var core_1 = require('@angular/core');
var moment = require('moment');
var _1 = require('rxjs/');
/**
 *Managing tasks on client side: sorting,filtering,etc...
 *Have method getChangeStream that returns observable which triggers observers when
 * new task was added,deleted,changed
 *  */
var TaskManagerService = (function () {
    function TaskManagerService(tasksStore) {
        this.tasksStore = tasksStore;
        this.Defaults_Loaded_Tasks_Amount = 100;
        this.globalChangeStream = new _1.Subject();
    }
    TaskManagerService.prototype.getDefaultTasks = function () {
        return this.tasksStore.getTasks(this.Defaults_Loaded_Tasks_Amount);
    };
    TaskManagerService.prototype.getTasksByDate = function (startDate, endDate) {
        return this.tasksStore.getTasksByDate(startDate, endDate);
    };
    TaskManagerService.prototype.getChangeStream = function () {
        return this.globalChangeStream.asObservable();
    };
    TaskManagerService.prototype.addTask = function (task) {
        var _this = this;
        this.tasksStore.addTask(task).subscribe(function (res) {
            if (res != null) {
                _this.globalChangeStream.next(task);
            }
        });
    };
    TaskManagerService.prototype.updateTask = function (task) {
        var _this = this;
        this.tasksStore.updateTask(task).subscribe({
            complete: function () {
                _this.globalChangeStream.next(task);
            }
        });
    };
    TaskManagerService.prototype.postponeTask = function (task, date) {
        var _this = this;
        var difference = moment.duration(date.diff(task.date)).asDays();
        this.tasksStore.postponeTask(task, difference).subscribe({
            complete: function () {
                _this.globalChangeStream.next(task);
            }
        });
    };
    TaskManagerService.prototype.delTask = function (task) {
        var _this = this;
        this.tasksStore.delTask(task).subscribe(function (res) {
            if (res)
                _this.globalChangeStream.next(task);
        });
    };
    TaskManagerService.prototype.completeTask = function (task) {
        var _this = this;
        this.tasksStore.completeTask(task).subscribe({
            complete: function () {
                _this.globalChangeStream.next(task);
            }
        });
    };
    TaskManagerService.prototype.undoCompleteTask = function (task) {
        var _this = this;
        this.tasksStore.undoCompleteTask(task).subscribe({
            complete: function () {
                _this.globalChangeStream.next(task);
            }
        });
    };
    TaskManagerService = __decorate([
        core_1.Injectable()
    ], TaskManagerService);
    return TaskManagerService;
}());
exports.TaskManagerService = TaskManagerService;
