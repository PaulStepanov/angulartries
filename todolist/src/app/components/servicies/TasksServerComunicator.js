"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by pili on 2/20/17.
 */
var core_1 = require('@angular/core');
var moment = require('moment');
var _1 = require('rxjs/');
var TaskBuilder_1 = require("../../accessoryClasses/task/TaskBuilder");
/**
 * class for managing tasks with server,
 * data exchange format you can find in the repository root
 * All public methods return Observable!!!
 * */
//TODO:refactor this whole code
var TasksServerComunicator = (function () {
    function TasksServerComunicator(http) {
        this.http = http;
    }
    TasksServerComunicator.prototype.getTasks = function (amount) {
        var _this = this;
        var getURL = "/tasks/recent/" + amount;
        var getSubj$ = new _1.Subject();
        this.http.get(getURL).subscribe({
            next: function (val) {
                var tasks = _this.extractData(val);
                for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
                    var task = tasks_1[_i];
                    getSubj$.next(_this.convertJSONTask(task));
                }
            },
            complete: function () {
                getSubj$.complete();
            }
        });
        return getSubj$.asObservable();
    };
    //Return tasks from startDate to endDate
    TasksServerComunicator.prototype.getTasksByDate = function (startDate, endDate) {
        var _this = this;
        var getURL = "/tasks/byDate";
        var getSubj$ = new _1.Subject();
        var options;
        //Setup body of request
        if (endDate) {
            options = {
                body: {
                    startDate: startDate.format('YYYY-MM-DD'),
                    endDate: endDate.format('YYYY-MM-DD')
                }
            };
        }
        else {
            options = {
                body: {
                    startDate: startDate.format('YYYY-MM-DD')
                }
            };
        }
        this.http.get(getURL, options).subscribe({
            next: function (val) {
                var tasks = _this.extractData(val);
                for (var _i = 0, tasks_2 = tasks; _i < tasks_2.length; _i++) {
                    var task = tasks_2[_i];
                    getSubj$.next(_this.convertJSONTask(task));
                }
            },
            complete: function () {
                getSubj$.complete();
            }
        });
        return getSubj$.asObservable();
    };
    //postone task for amount of days as a optional parameter, default 1 day
    TasksServerComunicator.prototype.postponeTask = function (task, daysAmount) {
        var _this = this;
        if (!daysAmount) {
            daysAmount = 1;
        }
        //Debugging
        if (!task.id) {
            alert('ni task id, error in TasksServerComunicator');
        }
        //----------------------
        var postoneSubj$ = new _1.Subject();
        var taskId = task.id;
        var postponeURL = "/tasks/postpone/" + taskId + "?day=" + daysAmount;
        this.http.get(postponeURL).subscribe(function (resp) {
            if (_this.extractData(resp)['isPostponed']) {
                console.log('comlp');
                postoneSubj$.complete();
            }
        });
        return postoneSubj$.asObservable();
    };
    TasksServerComunicator.prototype.addTask = function (task) {
        var _this = this;
        var addURL = '/tasks/add';
        var readyStateSubj$ = new _1.Subject;
        this.http.post(addURL, this.formatTaskToServer(task))
            .subscribe(function (val) {
            var doneJSON = _this.extractData(val);
            readyStateSubj$.next(doneJSON['id']);
        });
        return readyStateSubj$.asObservable();
    };
    TasksServerComunicator.prototype.updateTask = function (task) {
        var _this = this;
        var updtSubj$ = new _1.Subject;
        var updtURL = "/tasks/update/" + task.id;
        this.http.post(updtURL, this.formatTaskToServer(task))
            .subscribe(function (val) {
            var doneJSON = _this.extractData(val);
            updtSubj$.complete();
        });
        return updtSubj$.asObservable();
    };
    TasksServerComunicator.prototype.delTask = function (task) {
        var _this = this;
        var delSubj$ = new _1.Subject;
        var taskID = task.id;
        var delURL = "/tasks/delete/" + taskID;
        this.http.get(delURL).subscribe(function (resp) {
            delSubj$.next(_this.extractData(resp)['isDeleted']);
        });
        return delSubj$.asObservable();
    };
    TasksServerComunicator.prototype.completeTask = function (task) {
        var _this = this;
        var complSubj$ = new _1.Subject;
        var taskID = task.id;
        var complURL = "/tasks/complete/" + taskID;
        this.http.get(complURL).subscribe(function (resp) {
            if (_this.extractData(resp)['isCompleted']) {
                complSubj$.complete();
            }
        });
        return complSubj$;
    };
    TasksServerComunicator.prototype.undoCompleteTask = function (task) {
        var _this = this;
        var complSubj$ = new _1.Subject;
        var taskID = task.id;
        var complURL = "/tasks/undoComplete/" + taskID;
        this.http.get(complURL).subscribe(function (resp) {
            if (_this.extractData(resp)['isCompleted']) {
                complSubj$.complete();
            }
        });
        return complSubj$;
    };
    /*Converts http JSON task to a Task class*/
    TasksServerComunicator.prototype.convertJSONTask = function (task) {
        var taskBuilder = new TaskBuilder_1.TaskBuilder();
        return taskBuilder
            .setId(task['id'])
            .setDate(moment(task['date']))
            .setTitle(task['title'])
            .setPriority(task['priority'])
            .setIdDone(!!task['isDone'])
            .build();
    };
    /*Extracting data from http response to JSON format*/
    TasksServerComunicator.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    //formates task to standart acceptable with server
    TasksServerComunicator.prototype.formatTaskToServer = function (task) {
        return {
            date: task.date.format('YYYY-MM-DD'),
            title: task.title,
            priority: task.priority,
            isDone: task.isDone
        };
    };
    TasksServerComunicator = __decorate([
        core_1.Injectable()
    ], TasksServerComunicator);
    return TasksServerComunicator;
}());
exports.TasksServerComunicator = TasksServerComunicator;
