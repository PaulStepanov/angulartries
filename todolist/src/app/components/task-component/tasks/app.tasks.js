"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AppTasksComponent = (function () {
    function AppTasksComponent(taskManagerService, taskSorter) {
        this.taskManagerService = taskManagerService;
        this.taskSorter = taskSorter;
        this.tasks = [];
    }
    AppTasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setupTaskList();
        this.changeStream$ = this.taskManagerService.getChangeStream(); //When some changes happened it updates task list
        this.changeStream$.subscribe(function () {
            _this.setupTaskList();
        });
    };
    ;
    //Getting tasks from service
    AppTasksComponent.prototype.setupTaskList = function () {
        var _this = this;
        this.tasks = [];
        this.taskManagerService.getDefaultTasks().subscribe({
            next: function (task) {
                _this.tasks.push(task);
            },
            complete: function () {
                _this.tasks = _this.taskSorter.sortByPriority(_this.tasks);
            }
        });
    };
    AppTasksComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-tasks',
            templateUrl: 'app.tasks.html',
            styleUrls: ['app.tasks.css']
        })
    ], AppTasksComponent);
    return AppTasksComponent;
}());
exports.AppTasksComponent = AppTasksComponent;
