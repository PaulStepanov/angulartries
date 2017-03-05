"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Павел on 27-Feb-17.
 */
var core_1 = require('@angular/core');
var TasksSorter = (function () {
    function TasksSorter() {
    }
    TasksSorter.prototype.sortByPriority = function (tasks) {
        return tasks.sort(function (task1, task2) {
            if (task1.priority > task2.priority) {
                return 1;
            }
            if (task1.priority < task2.priority) {
                return -1;
            }
            return 0;
        });
    };
    TasksSorter = __decorate([
        core_1.Injectable()
    ], TasksSorter);
    return TasksSorter;
}());
exports.TasksSorter = TasksSorter;
