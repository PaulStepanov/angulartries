"use strict";
var Task = (function () {
    function Task(title, date, priority, isDone, id) {
        this.isDone = false;
        this.priority = 4;
        this.title = title;
        this.date = date;
        if (isDone) {
            this.isDone = isDone;
        }
        else {
            this.isDone = false;
        }
        if (priority) {
            this.priority = priority;
        }
        if (id) {
            this.id = id;
        }
    }
    return Task;
}());
exports.Task = Task;
