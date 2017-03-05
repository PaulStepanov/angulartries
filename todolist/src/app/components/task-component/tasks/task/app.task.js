"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var TaskComponent = (function () {
    function TaskComponent(taskManagerService, dialog) {
        this.taskManagerService = taskManagerService;
        this.dialog = dialog;
    }
    TaskComponent.prototype.ngOnInit = function () {
    };
    TaskComponent.prototype.focusOnEditTaskArea = function (element) {
        element.focus();
    };
    TaskComponent.prototype.updateText = function (inputText) {
        this.task.title = inputText.value;
        this.taskManagerService.updateTask(this.task);
    };
    TaskComponent.prototype.getPriorityColor = function () {
        switch (this.task.priority) {
            case 0:
                return "gray";
            case 1:
                return "red";
            case 2:
                return "orange";
            case 3:
                return "green";
        }
    };
    TaskComponent.prototype.completeTask = function () {
        this.taskManagerService.completeTask(this.task);
    };
    TaskComponent.prototype.undoComplleteTask = function () {
        this.taskManagerService.undoCompleteTask(this.task);
    };
    __decorate([
        core_1.Input()
    ], TaskComponent.prototype, "task", void 0);
    TaskComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-task',
            templateUrl: 'app.task.html',
            styleUrls: ['app.task.css'],
        })
    ], TaskComponent);
    return TaskComponent;
}());
exports.TaskComponent = TaskComponent;
