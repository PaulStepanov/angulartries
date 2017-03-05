"use strict";
var Task_1 = require("./Task");
var TaskBuilder = (function () {
    function TaskBuilder() {
        this.isDone = false;
        this.priority = 4;
    }
    TaskBuilder.prototype.setId = function (id) {
        this.id = id;
        return this;
    };
    TaskBuilder.prototype.setTitle = function (title) {
        this.title = title;
        return this;
    };
    TaskBuilder.prototype.setDate = function (date) {
        this.date = date;
        return this;
    };
    TaskBuilder.prototype.setIdDone = function (isDone) {
        this.isDone = isDone;
        return this;
    };
    TaskBuilder.prototype.setPriority = function (priority) {
        this.priority = priority;
        return this;
    };
    TaskBuilder.prototype.build = function () {
        return new Task_1.Task(this.title, this.date, this.priority, this.isDone, this.id);
    };
    return TaskBuilder;
}());
exports.TaskBuilder = TaskBuilder;
