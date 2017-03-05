"use strict";
var _1 = require('rxjs/');
/**
 * Async Tasks array that use observeable and
 * send true to observer when array is changed
 * */
var TasksArrAsync = (function () {
    function TasksArrAsync() {
        this.tasks = [];
        this.changeSream = new _1.Subject();
    }
    TasksArrAsync.prototype.getChangeStream = function () {
        return this.changeSream;
    };
    TasksArrAsync.prototype.push = function (task) {
        this.tasks.push(task);
        this.changeSream.next(true);
    };
    TasksArrAsync.prototype.getTasks = function () {
        return this.tasks;
    };
    TasksArrAsync.prototype.clear = function () {
        this.tasks = [];
        this.changeSream.next(true);
    };
    TasksArrAsync.prototype.remove = function (task) {
        var index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
        }
        this.changeSream.next(true);
    };
    return TasksArrAsync;
}());
exports.TasksArrAsync = TasksArrAsync;
