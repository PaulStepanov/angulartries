webpackJsonp([1,4],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TasksServerComunicator__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs___);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskManagerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 *Managing tasks on client side: sorting,filtering,etc...
 *Have method getChangeStream that returns observable which triggers observers when
 * new task was added,deleted,changed
 *  */
var TaskManagerService = (function () {
    function TaskManagerService(tasksStore) {
        this.tasksStore = tasksStore;
        this.Defaults_Loaded_Tasks_Amount = 100;
        this.globalChangeStream = new __WEBPACK_IMPORTED_MODULE_3_rxjs___["Subject"]();
    }
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
        var difference = __WEBPACK_IMPORTED_MODULE_1_moment__["duration"](date.diff(task.date)).asDays();
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__TasksServerComunicator__["a" /* TasksServerComunicator */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__TasksServerComunicator__["a" /* TasksServerComunicator */]) === 'function' && _a) || Object])
    ], TaskManagerService);
    return TaskManagerService;
    var _a;
}());
//# sourceMappingURL=E:/progects/New folder/todolist/src/TaskManagerService.js.map

/***/ }),

/***/ 1139:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(635);


/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });
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
//# sourceMappingURL=E:/progects/New folder/todolist/src/Task.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicies_TaskManagerService__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accessoryClasses_task_Task__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTaskDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
                year: __WEBPACK_IMPORTED_MODULE_3_moment__().year(),
                month: __WEBPACK_IMPORTED_MODULE_3_moment__().month(),
                day: __WEBPACK_IMPORTED_MODULE_3_moment__().date()
            }
        };
    }
    AddTaskDialog.prototype.ngOnInit = function () {
    };
    AddTaskDialog.prototype.addTask = function (name) {
        var date = __WEBPACK_IMPORTED_MODULE_3_moment__([this.date.date.year, this.date.date.month, this.date.date.day]);
        this.taskManagerService.addTask(new __WEBPACK_IMPORTED_MODULE_2__accessoryClasses_task_Task__["a" /* Task */](name, date, this.selectedPriority));
    };
    AddTaskDialog = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog-addtask',
            template: __webpack_require__(870),
            styles: [__webpack_require__(862)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicies_TaskManagerService__["a" /* TaskManagerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servicies_TaskManagerService__["a" /* TaskManagerService */]) === 'function' && _a) || Object])
    ], AddTaskDialog);
    return AddTaskDialog;
    var _a;
}());
//# sourceMappingURL=E:/progects/New folder/todolist/src/taskDialog.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs___);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__accessoryClasses_task_TaskBuilder__ = __webpack_require__(786);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksServerComunicator; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






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
    //Return tasks from startDate to endDate
    TasksServerComunicator.prototype.getTasksByDate = function (startDate, endDate) {
        var _this = this;
        var getURL = "/tasks/byDate";
        var getSubj$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs___["Subject"]();
        var options;
        var searchParams = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* URLSearchParams */]();
        //Setup body of request
        searchParams.set('startDate', startDate.format('YYYY-MM-DD'));
        if (endDate) {
            searchParams.set('endDate', endDate.format('YYYY-MM-DD'));
        }
        options = {
            search: searchParams
        };
        return this.http.get(getURL, options)
            .map(function (val) { return _this.extractData(val); })
            .mergeMap(function (tasks) { return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].from(tasks)
            .map(function (task) { return _this.convertJSONTask(task); }); });
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
        var postoneSubj$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs___["Subject"]();
        var taskId = task.id;
        var postponeURL = "/tasks/postpone/" + taskId + "?day=" + daysAmount;
        this.http.get(postponeURL)
            .filter(function (resp) { return _this.extractData(resp)['isPostponed']; })
            .do(function (resp) {
            postoneSubj$.complete();
        });
        return postoneSubj$.asObservable();
    };
    TasksServerComunicator.prototype.addTask = function (task) {
        var _this = this;
        var addURL = '/tasks/add';
        var readyStateSubj$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs___["Subject"];
        this.http.post(addURL, this.formatTaskToServer(task))
            .subscribe(function (val) {
            var doneJSON = _this.extractData(val);
            readyStateSubj$.next(doneJSON['id']);
        });
        return readyStateSubj$.asObservable();
    };
    TasksServerComunicator.prototype.updateTask = function (task) {
        var _this = this;
        var updtSubj$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs___["Subject"];
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
        var delSubj$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs___["Subject"];
        var taskID = task.id;
        var delURL = "/tasks/delete/" + taskID;
        this.http.get(delURL).subscribe(function (resp) {
            delSubj$.next(_this.extractData(resp)['isDeleted']);
        });
        return delSubj$.asObservable();
    };
    TasksServerComunicator.prototype.completeTask = function (task) {
        var _this = this;
        var complSubj$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs___["Subject"];
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
        var complSubj$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs___["Subject"];
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
        var taskBuilder = new __WEBPACK_IMPORTED_MODULE_4__accessoryClasses_task_TaskBuilder__["a" /* TaskBuilder */]();
        return taskBuilder
            .setId(task['id'])
            .setDate(__WEBPACK_IMPORTED_MODULE_1_moment__(task['date']))
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], TasksServerComunicator);
    return TasksServerComunicator;
    var _a;
}());
//# sourceMappingURL=E:/progects/New folder/todolist/src/TasksServerComunicator.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksSorter; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], TasksSorter);
    return TasksSorter;
}());
//# sourceMappingURL=E:/progects/New folder/todolist/src/TasksSorter.js.map

/***/ }),

/***/ 634:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 634;


/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(763);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(788);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=E:/progects/New folder/todolist/src/main.js.map

/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Task__ = __webpack_require__(163);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskBuilder; });

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
        return new __WEBPACK_IMPORTED_MODULE_0__Task__["a" /* Task */](this.title, this.date, this.priority, this.isDone, this.id);
    };
    return TaskBuilder;
}());
//# sourceMappingURL=E:/progects/New folder/todolist/src/TaskBuilder.js.map

/***/ }),

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_login_component_app_loginComponent__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__components_login_component_app_loginComponent__["a" /* LoginComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__components_login_component_app_loginComponent__["a" /* LoginComponent */]],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1__components_login_component_app_loginComponent__["a" /* LoginComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginModule);
    return LoginModule;
}());
//# sourceMappingURL=E:/progects/New folder/todolist/src/app.login.module.js.map

/***/ }),

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_main_component_app_root_rootcomponent__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_login_module__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs__ = __webpack_require__(851);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_header_component_app_header__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_task_component_tasks_app_tasks__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_task_component_tasks_task_app_task__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_header_component_taskdialog_taskDialog__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_servicies_TaskManagerService__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_mydatepicker__ = __webpack_require__(858);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_mydatepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_mydatepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_servicies_TasksServerComunicator__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_servicies_TasksSorter__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_task_component_tasks_task_changeButton_changeButton_component__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_dropdown__ = __webpack_require__(859);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_ngx_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_task_component_tasks_taskByDate_taskByDate__ = __webpack_require__(793);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__components_main_component_app_root_rootcomponent__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_header_component_app_header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_task_component_tasks_app_tasks__["a" /* AppTasksComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_task_component_tasks_task_app_task__["a" /* TaskComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_header_component_taskdialog_taskDialog__["a" /* AddTaskDialog */],
                __WEBPACK_IMPORTED_MODULE_17__components_task_component_tasks_task_changeButton_changeButton_component__["a" /* ChangeDropDownMenu */],
                __WEBPACK_IMPORTED_MODULE_19__components_task_component_tasks_taskByDate_taskByDate__["a" /* TaskByDate */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_login_module__["a" /* LoginModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["MaterialModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["MdInputModule"],
                __WEBPACK_IMPORTED_MODULE_14_mydatepicker__["MyDatePickerModule"],
                __WEBPACK_IMPORTED_MODULE_18_ngx_dropdown__["DropdownModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__components_main_component_app_root_rootcomponent__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_12__components_header_component_taskdialog_taskDialog__["a" /* AddTaskDialog */]],
            providers: [__WEBPACK_IMPORTED_MODULE_13__components_servicies_TaskManagerService__["a" /* TaskManagerService */], __WEBPACK_IMPORTED_MODULE_15__components_servicies_TasksServerComunicator__["a" /* TasksServerComunicator */], __WEBPACK_IMPORTED_MODULE_16__components_servicies_TasksSorter__["a" /* TasksSorter */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=E:/progects/New folder/todolist/src/app.module.js.map

/***/ }),

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__taskdialog_taskDialog__ = __webpack_require__(469);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(dialog) {
        this.dialog = dialog;
    }
    HeaderComponent.prototype.openDialogAddTask = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__taskdialog_taskDialog__["a" /* AddTaskDialog */], { width: "40%", height: '25%' });
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(869),
            styles: [__webpack_require__(861)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialog"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialog"]) === 'function' && _a) || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a;
}());
//# sourceMappingURL=E:/progects/New folder/todolist/src/app.header.js.map

/***/ }),

/***/ 790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'loginModule',
            template: __webpack_require__(871)
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
//# sourceMappingURL=E:/progects/New folder/todolist/src/app.loginComponent.js.map

/***/ }),

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(872),
            styles: [__webpack_require__(863), __webpack_require__(868)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=E:/progects/New folder/todolist/src/app.root.rootcomponent.js.map

/***/ }),

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppTasksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppTasksComponent = (function () {
    function AppTasksComponent() {
        this.today = __WEBPACK_IMPORTED_MODULE_1_moment__().hours(0).minutes(0).seconds(0).milliseconds(0);
        this.tasksByDate = [];
    }
    AppTasksComponent.prototype.ngOnInit = function () {
        this.generateDefaultTasksBlocksList();
    };
    ;
    AppTasksComponent.prototype.generateDefaultTasksBlocksList = function () {
        this.generateOverdue();
        var tomorrow = this.today.clone().add(1, 'day');
        this.tasksByDate.push(new TaskByDateMeta('Today', this.today));
        this.tasksByDate.push(new TaskByDateMeta('Tomorrow', tomorrow));
        //Generating tasks blocks for next 5 days after tomorrow
        var newDate = tomorrow.clone();
        for (var i = 0; i < 5; i++) {
            newDate.add(1, 'day');
            this.tasksByDate.push(new TaskByDateMeta(newDate.format('dddd'), newDate.clone()));
        }
    };
    AppTasksComponent.prototype.generateOverdue = function () {
        this.tasksByDate.push(new TaskByDateMeta('Overdue', this.today.clone().add(-10, 'year'), this.today.clone().add(-1, 'day')));
    };
    AppTasksComponent.prototype.privateGenerateForaWeek = function () {
    };
    AppTasksComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tasks',
            template: __webpack_require__(873),
            styles: [__webpack_require__(864)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppTasksComponent);
    return AppTasksComponent;
}());
var TaskByDateMeta = (function () {
    function TaskByDateMeta(title, startDate, endDate) {
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
    }
    return TaskByDateMeta;
}());
//# sourceMappingURL=E:/progects/New folder/todolist/src/app.tasks.js.map

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicies_TasksSorter__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicies_TaskManagerService__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskByDate; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Moment = __WEBPACK_IMPORTED_MODULE_3_moment__["Moment"];
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], TaskByDate.prototype, "title", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof Moment !== 'undefined' && Moment) === 'function' && _a) || Object)
    ], TaskByDate.prototype, "startDate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_b = typeof Moment !== 'undefined' && Moment) === 'function' && _b) || Object)
    ], TaskByDate.prototype, "endDate", void 0);
    TaskByDate = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'task-by-date',
            template: __webpack_require__(874),
            styles: [__webpack_require__(865)],
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__servicies_TaskManagerService__["a" /* TaskManagerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__servicies_TaskManagerService__["a" /* TaskManagerService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__servicies_TasksSorter__["a" /* TasksSorter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servicies_TasksSorter__["a" /* TasksSorter */]) === 'function' && _d) || Object])
    ], TaskByDate);
    return TaskByDate;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=E:/progects/New folder/todolist/src/taskByDate.js.map

/***/ }),

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accessoryClasses_task_Task__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicies_TaskManagerService__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(232);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__accessoryClasses_task_Task__["a" /* Task */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__accessoryClasses_task_Task__["a" /* Task */]) === 'function' && _a) || Object)
    ], TaskComponent.prototype, "task", void 0);
    TaskComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task',
            template: __webpack_require__(875),
            styles: [__webpack_require__(866)],
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__servicies_TaskManagerService__["a" /* TaskManagerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__servicies_TaskManagerService__["a" /* TaskManagerService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["MdDialog"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_material__["MdDialog"]) === 'function' && _c) || Object])
    ], TaskComponent);
    return TaskComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=E:/progects/New folder/todolist/src/app.task.js.map

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicies_TaskManagerService__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accessoryClasses_task_Task__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeDropDownMenu; });
/**
 * Created by Павел on 27-Feb-17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangeDropDownMenu = (function () {
    function ChangeDropDownMenu(taskManagerService) {
        this.taskManagerService = taskManagerService;
        this.editTaskText = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.postponeDatePickerOptions = {
            dateFormat: 'dd.mm.yyyy',
            width: '100%',
            todayBtnTxt: 'Today',
            disableUntil: { year: __WEBPACK_IMPORTED_MODULE_3_moment__().year(), month: __WEBPACK_IMPORTED_MODULE_3_moment__().month(), day: __WEBPACK_IMPORTED_MODULE_3_moment__().date() }
        };
        this.postponeDate = {
            date: {
                year: __WEBPACK_IMPORTED_MODULE_3_moment__().year(),
                month: __WEBPACK_IMPORTED_MODULE_3_moment__().month(),
                day: __WEBPACK_IMPORTED_MODULE_3_moment__().date()
            }
        };
    }
    ChangeDropDownMenu.prototype.ngOnInit = function () {
    };
    ChangeDropDownMenu.prototype.editTaskTitle = function () {
        this.editTaskText.emit(this.task);
    };
    ChangeDropDownMenu.prototype.deleteTask = function () {
        this.taskManagerService.delTask(this.task);
    };
    ChangeDropDownMenu.prototype.setPriority = function (event) {
        var priorityID = event.target['id'];
        var priority;
        switch (priorityID) {
            case ('priority1'): {
                priority = 1;
                break;
            }
            case ('priority2'): {
                priority = 2;
                break;
            }
            case ('priority3'): {
                priority = 3;
                break;
            }
            case ('priority4'): {
                priority = 4;
                break;
            }
        }
        this.task.priority = priority;
        this.taskManagerService.updateTask(this.task);
    };
    ChangeDropDownMenu.prototype.postponeOneDay = function () {
        var newDate;
        if (this.task.date.isSame(__WEBPACK_IMPORTED_MODULE_3_moment__(), 'day') || this.task.date.isBefore(__WEBPACK_IMPORTED_MODULE_3_moment__(), 'day')) {
            newDate = __WEBPACK_IMPORTED_MODULE_3_moment__().hour(0).minutes(0).second(0).milliseconds(0);
            newDate.add(1, 'days');
        }
        else {
            newDate = this.task.date.clone();
            newDate.add(1, 'days');
        }
        this.taskManagerService.postponeTask(this.task, newDate);
    };
    ChangeDropDownMenu.prototype.postponeOneWeek = function () {
        var newDate;
        if (this.task.date.isSame(__WEBPACK_IMPORTED_MODULE_3_moment__(), 'day') || this.task.date.isBefore(__WEBPACK_IMPORTED_MODULE_3_moment__(), 'day')) {
            newDate = __WEBPACK_IMPORTED_MODULE_3_moment__().hour(0).minutes(0).second(0).milliseconds(0);
            newDate.add(1, 'week');
        }
        else {
            newDate = this.task.date.clone();
            newDate.add(1, 'week');
        }
        this.taskManagerService.postponeTask(this.task, newDate);
    };
    ChangeDropDownMenu.prototype.onPostponeCalendarDateChanged = function (event) {
        var date = __WEBPACK_IMPORTED_MODULE_3_moment__(event.jsdate);
        this.taskManagerService.postponeTask(this.task, date);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__accessoryClasses_task_Task__["a" /* Task */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__accessoryClasses_task_Task__["a" /* Task */]) === 'function' && _a) || Object)
    ], ChangeDropDownMenu.prototype, "task", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], ChangeDropDownMenu.prototype, "editTaskText", void 0);
    ChangeDropDownMenu = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'changeDropDownMenu',
            template: __webpack_require__(876),
            styles: [__webpack_require__(867)]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__servicies_TaskManagerService__["a" /* TaskManagerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servicies_TaskManagerService__["a" /* TaskManagerService */]) === 'function' && _c) || Object])
    ], ChangeDropDownMenu);
    return ChangeDropDownMenu;
    var _a, _b, _c;
}());
//# sourceMappingURL=E:/progects/New folder/todolist/src/changeButton.component.js.map

/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=E:/progects/New folder/todolist/src/environment.js.map

/***/ }),

/***/ 852:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 484,
	"./af.js": 484,
	"./ar": 490,
	"./ar-dz": 485,
	"./ar-dz.js": 485,
	"./ar-ly": 486,
	"./ar-ly.js": 486,
	"./ar-ma": 487,
	"./ar-ma.js": 487,
	"./ar-sa": 488,
	"./ar-sa.js": 488,
	"./ar-tn": 489,
	"./ar-tn.js": 489,
	"./ar.js": 490,
	"./az": 491,
	"./az.js": 491,
	"./be": 492,
	"./be.js": 492,
	"./bg": 493,
	"./bg.js": 493,
	"./bn": 494,
	"./bn.js": 494,
	"./bo": 495,
	"./bo.js": 495,
	"./br": 496,
	"./br.js": 496,
	"./bs": 497,
	"./bs.js": 497,
	"./ca": 498,
	"./ca.js": 498,
	"./cs": 499,
	"./cs.js": 499,
	"./cv": 500,
	"./cv.js": 500,
	"./cy": 501,
	"./cy.js": 501,
	"./da": 502,
	"./da.js": 502,
	"./de": 504,
	"./de-at": 503,
	"./de-at.js": 503,
	"./de.js": 504,
	"./dv": 505,
	"./dv.js": 505,
	"./el": 506,
	"./el.js": 506,
	"./en-au": 507,
	"./en-au.js": 507,
	"./en-ca": 508,
	"./en-ca.js": 508,
	"./en-gb": 509,
	"./en-gb.js": 509,
	"./en-ie": 510,
	"./en-ie.js": 510,
	"./en-nz": 511,
	"./en-nz.js": 511,
	"./eo": 512,
	"./eo.js": 512,
	"./es": 514,
	"./es-do": 513,
	"./es-do.js": 513,
	"./es.js": 514,
	"./et": 515,
	"./et.js": 515,
	"./eu": 516,
	"./eu.js": 516,
	"./fa": 517,
	"./fa.js": 517,
	"./fi": 518,
	"./fi.js": 518,
	"./fo": 519,
	"./fo.js": 519,
	"./fr": 522,
	"./fr-ca": 520,
	"./fr-ca.js": 520,
	"./fr-ch": 521,
	"./fr-ch.js": 521,
	"./fr.js": 522,
	"./fy": 523,
	"./fy.js": 523,
	"./gd": 524,
	"./gd.js": 524,
	"./gl": 525,
	"./gl.js": 525,
	"./he": 526,
	"./he.js": 526,
	"./hi": 527,
	"./hi.js": 527,
	"./hr": 528,
	"./hr.js": 528,
	"./hu": 529,
	"./hu.js": 529,
	"./hy-am": 530,
	"./hy-am.js": 530,
	"./id": 531,
	"./id.js": 531,
	"./is": 532,
	"./is.js": 532,
	"./it": 533,
	"./it.js": 533,
	"./ja": 534,
	"./ja.js": 534,
	"./jv": 535,
	"./jv.js": 535,
	"./ka": 536,
	"./ka.js": 536,
	"./kk": 537,
	"./kk.js": 537,
	"./km": 538,
	"./km.js": 538,
	"./ko": 539,
	"./ko.js": 539,
	"./ky": 540,
	"./ky.js": 540,
	"./lb": 541,
	"./lb.js": 541,
	"./lo": 542,
	"./lo.js": 542,
	"./lt": 543,
	"./lt.js": 543,
	"./lv": 544,
	"./lv.js": 544,
	"./me": 545,
	"./me.js": 545,
	"./mi": 546,
	"./mi.js": 546,
	"./mk": 547,
	"./mk.js": 547,
	"./ml": 548,
	"./ml.js": 548,
	"./mr": 549,
	"./mr.js": 549,
	"./ms": 551,
	"./ms-my": 550,
	"./ms-my.js": 550,
	"./ms.js": 551,
	"./my": 552,
	"./my.js": 552,
	"./nb": 553,
	"./nb.js": 553,
	"./ne": 554,
	"./ne.js": 554,
	"./nl": 556,
	"./nl-be": 555,
	"./nl-be.js": 555,
	"./nl.js": 556,
	"./nn": 557,
	"./nn.js": 557,
	"./pa-in": 558,
	"./pa-in.js": 558,
	"./pl": 559,
	"./pl.js": 559,
	"./pt": 561,
	"./pt-br": 560,
	"./pt-br.js": 560,
	"./pt.js": 561,
	"./ro": 562,
	"./ro.js": 562,
	"./ru": 563,
	"./ru.js": 563,
	"./se": 564,
	"./se.js": 564,
	"./si": 565,
	"./si.js": 565,
	"./sk": 566,
	"./sk.js": 566,
	"./sl": 567,
	"./sl.js": 567,
	"./sq": 568,
	"./sq.js": 568,
	"./sr": 570,
	"./sr-cyrl": 569,
	"./sr-cyrl.js": 569,
	"./sr.js": 570,
	"./ss": 571,
	"./ss.js": 571,
	"./sv": 572,
	"./sv.js": 572,
	"./sw": 573,
	"./sw.js": 573,
	"./ta": 574,
	"./ta.js": 574,
	"./te": 575,
	"./te.js": 575,
	"./tet": 576,
	"./tet.js": 576,
	"./th": 577,
	"./th.js": 577,
	"./tl-ph": 578,
	"./tl-ph.js": 578,
	"./tlh": 579,
	"./tlh.js": 579,
	"./tr": 580,
	"./tr.js": 580,
	"./tzl": 581,
	"./tzl.js": 581,
	"./tzm": 583,
	"./tzm-latn": 582,
	"./tzm-latn.js": 582,
	"./tzm.js": 583,
	"./uk": 584,
	"./uk.js": 584,
	"./uz": 585,
	"./uz.js": 585,
	"./vi": 586,
	"./vi.js": 586,
	"./x-pseudo": 587,
	"./x-pseudo.js": 587,
	"./yo": 588,
	"./yo.js": 588,
	"./zh-cn": 589,
	"./zh-cn.js": 589,
	"./zh-hk": 590,
	"./zh-hk.js": 590,
	"./zh-tw": 591,
	"./zh-tw.js": 591
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 852;


/***/ }),

/***/ 861:
/***/ (function(module, exports) {

module.exports = "#title {\r\n  font-size: 20px;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n\r\n#search {\r\n  width: 100%;\r\n  font-size: 20px;\r\n}\r\n"

/***/ }),

/***/ 862:
/***/ (function(module, exports) {

module.exports = ".taskText {\r\n  width: 100%;\r\n}\r\n.taskContainer{\r\n  width: 100%;\r\n}\r\n\r\n.priorityContainer{\r\n  width: 40%;\r\n  height: 10%;\r\n}\r\n.priorityName{\r\n  margin-left: 11px;\r\n}\r\n.closeBut{\r\n  float: right;\r\n}\r\n.addTaskText{\r\n  float: left;\r\n  font-size: 17px;\r\n  margin-left: 40%;\r\n}\r\n.left{\r\n  float: left;\r\n}\r\n.right{\r\n  float: right;\r\n}\r\n"

/***/ }),

/***/ 863:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 864:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 865:
/***/ (function(module, exports) {

module.exports = "#titleHeader{\r\n  width: 100%;\r\n  height: 13%;\r\n  background-color: #1d9ce5;\r\n\r\n}\r\n\r\n#titleText{\r\n  color:white;\r\n}\r\n"

/***/ }),

/***/ 866:
/***/ (function(module, exports) {

module.exports = "#doneIcon{\r\n  color: #88c149!important;\r\n}\r\n#doneIcon:hover{\r\n  color: red!important;\r\n}\r\n\r\n#undoneIcon:hover{\r\n  color:green!important;\r\n}\r\n"

/***/ }),

/***/ 867:
/***/ (function(module, exports) {

module.exports = ".shadowText{\r\n  color:rgba(96,96,96,0.46);\r\n  margin-left: 7px;\r\n}\r\n\r\n.tabs{\r\n  width: 200px;\r\n}\r\n\r\n.redText{\r\n  color: red;\r\n}\r\n.redText:hover{\r\n  color: red;\r\n}\r\n\r\n.red{\r\n  color: red;\r\n}\r\n\r\n.orange{\r\n  color:orange;\r\n}\r\n\r\n.green{\r\n  color:green;\r\n}\r\n\r\n.gray{\r\n  color:gray;\r\n}\r\n"

/***/ }),

/***/ 868:
/***/ (function(module, exports) {

module.exports = "/*!\r\n * bootswatch v3.3.7\r\n * Homepage: http://bootswatch.com\r\n * Copyright 2012-2016 Thomas Park\r\n * Licensed under MIT\r\n * Based on Bootstrap\r\n*//*!\r\n * Bootstrap v3.3.7 (http://getbootstrap.com)\r\n * Copyright 2011-2016 Twitter, Inc.\r\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\r\n *//*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{font-size:2em;margin:0.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=\"checkbox\"],input[type=\"radio\"]{box-sizing:border-box;padding:0}input[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}input[type=\"search\"]{-webkit-appearance:textfield;box-sizing:content-box}input[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:bold}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */@media print{*,*:before,*:after{background:transparent !important;color:#000 !important;box-shadow:none !important;text-shadow:none !important}a,a:visited{text-decoration:underline}a[href]:after{content:\" (\" attr(href) \")\"}abbr[title]:after{content:\" (\" attr(title) \")\"}a[href^=\"#\"]:after,a[href^=\"javascript:\"]:after{content:\"\"}pre,blockquote{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}tr,img{page-break-inside:avoid}img{max-width:100% !important}p,h2,h3{orphans:3;widows:3}h2,h3{page-break-after:avoid}.navbar{display:none}.btn>.caret,.dropup>.btn>.caret{border-top-color:#000 !important}.label{border:1px solid #000}.table{border-collapse:collapse !important}.table td,.table th{background-color:#fff !important}.table-bordered th,.table-bordered td{border:1px solid #ddd !important}}@font-face{font-family:'Glyphicons Halflings';src:url('../fonts/glyphicons-halflings-regular.eot');src:url('../fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'),url('../fonts/glyphicons-halflings-regular.woff2') format('woff2'),url('../fonts/glyphicons-halflings-regular.woff') format('woff'),url('../fonts/glyphicons-halflings-regular.ttf') format('truetype'),url('../fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg')}.glyphicon{position:relative;top:1px;display:inline-block;font-family:'Glyphicons Halflings';font-style:normal;font-weight:normal;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.glyphicon-asterisk:before{content:\"\\002a\"}.glyphicon-plus:before{content:\"\\002b\"}.glyphicon-euro:before,.glyphicon-eur:before{content:\"\\20ac\"}.glyphicon-minus:before{content:\"\\2212\"}.glyphicon-cloud:before{content:\"\\2601\"}.glyphicon-envelope:before{content:\"\\2709\"}.glyphicon-pencil:before{content:\"\\270f\"}.glyphicon-glass:before{content:\"\\e001\"}.glyphicon-music:before{content:\"\\e002\"}.glyphicon-search:before{content:\"\\e003\"}.glyphicon-heart:before{content:\"\\e005\"}.glyphicon-star:before{content:\"\\e006\"}.glyphicon-star-empty:before{content:\"\\e007\"}.glyphicon-user:before{content:\"\\e008\"}.glyphicon-film:before{content:\"\\e009\"}.glyphicon-th-large:before{content:\"\\e010\"}.glyphicon-th:before{content:\"\\e011\"}.glyphicon-th-list:before{content:\"\\e012\"}.glyphicon-ok:before{content:\"\\e013\"}.glyphicon-remove:before{content:\"\\e014\"}.glyphicon-zoom-in:before{content:\"\\e015\"}.glyphicon-zoom-out:before{content:\"\\e016\"}.glyphicon-off:before{content:\"\\e017\"}.glyphicon-signal:before{content:\"\\e018\"}.glyphicon-cog:before{content:\"\\e019\"}.glyphicon-trash:before{content:\"\\e020\"}.glyphicon-home:before{content:\"\\e021\"}.glyphicon-file:before{content:\"\\e022\"}.glyphicon-time:before{content:\"\\e023\"}.glyphicon-road:before{content:\"\\e024\"}.glyphicon-download-alt:before{content:\"\\e025\"}.glyphicon-download:before{content:\"\\e026\"}.glyphicon-upload:before{content:\"\\e027\"}.glyphicon-inbox:before{content:\"\\e028\"}.glyphicon-play-circle:before{content:\"\\e029\"}.glyphicon-repeat:before{content:\"\\e030\"}.glyphicon-refresh:before{content:\"\\e031\"}.glyphicon-list-alt:before{content:\"\\e032\"}.glyphicon-lock:before{content:\"\\e033\"}.glyphicon-flag:before{content:\"\\e034\"}.glyphicon-headphones:before{content:\"\\e035\"}.glyphicon-volume-off:before{content:\"\\e036\"}.glyphicon-volume-down:before{content:\"\\e037\"}.glyphicon-volume-up:before{content:\"\\e038\"}.glyphicon-qrcode:before{content:\"\\e039\"}.glyphicon-barcode:before{content:\"\\e040\"}.glyphicon-tag:before{content:\"\\e041\"}.glyphicon-tags:before{content:\"\\e042\"}.glyphicon-book:before{content:\"\\e043\"}.glyphicon-bookmark:before{content:\"\\e044\"}.glyphicon-print:before{content:\"\\e045\"}.glyphicon-camera:before{content:\"\\e046\"}.glyphicon-font:before{content:\"\\e047\"}.glyphicon-bold:before{content:\"\\e048\"}.glyphicon-italic:before{content:\"\\e049\"}.glyphicon-text-height:before{content:\"\\e050\"}.glyphicon-text-width:before{content:\"\\e051\"}.glyphicon-align-left:before{content:\"\\e052\"}.glyphicon-align-center:before{content:\"\\e053\"}.glyphicon-align-right:before{content:\"\\e054\"}.glyphicon-align-justify:before{content:\"\\e055\"}.glyphicon-list:before{content:\"\\e056\"}.glyphicon-indent-left:before{content:\"\\e057\"}.glyphicon-indent-right:before{content:\"\\e058\"}.glyphicon-facetime-video:before{content:\"\\e059\"}.glyphicon-picture:before{content:\"\\e060\"}.glyphicon-map-marker:before{content:\"\\e062\"}.glyphicon-adjust:before{content:\"\\e063\"}.glyphicon-tint:before{content:\"\\e064\"}.glyphicon-edit:before{content:\"\\e065\"}.glyphicon-share:before{content:\"\\e066\"}.glyphicon-check:before{content:\"\\e067\"}.glyphicon-move:before{content:\"\\e068\"}.glyphicon-step-backward:before{content:\"\\e069\"}.glyphicon-fast-backward:before{content:\"\\e070\"}.glyphicon-backward:before{content:\"\\e071\"}.glyphicon-play:before{content:\"\\e072\"}.glyphicon-pause:before{content:\"\\e073\"}.glyphicon-stop:before{content:\"\\e074\"}.glyphicon-forward:before{content:\"\\e075\"}.glyphicon-fast-forward:before{content:\"\\e076\"}.glyphicon-step-forward:before{content:\"\\e077\"}.glyphicon-eject:before{content:\"\\e078\"}.glyphicon-chevron-left:before{content:\"\\e079\"}.glyphicon-chevron-right:before{content:\"\\e080\"}.glyphicon-plus-sign:before{content:\"\\e081\"}.glyphicon-minus-sign:before{content:\"\\e082\"}.glyphicon-remove-sign:before{content:\"\\e083\"}.glyphicon-ok-sign:before{content:\"\\e084\"}.glyphicon-question-sign:before{content:\"\\e085\"}.glyphicon-info-sign:before{content:\"\\e086\"}.glyphicon-screenshot:before{content:\"\\e087\"}.glyphicon-remove-circle:before{content:\"\\e088\"}.glyphicon-ok-circle:before{content:\"\\e089\"}.glyphicon-ban-circle:before{content:\"\\e090\"}.glyphicon-arrow-left:before{content:\"\\e091\"}.glyphicon-arrow-right:before{content:\"\\e092\"}.glyphicon-arrow-up:before{content:\"\\e093\"}.glyphicon-arrow-down:before{content:\"\\e094\"}.glyphicon-share-alt:before{content:\"\\e095\"}.glyphicon-resize-full:before{content:\"\\e096\"}.glyphicon-resize-small:before{content:\"\\e097\"}.glyphicon-exclamation-sign:before{content:\"\\e101\"}.glyphicon-gift:before{content:\"\\e102\"}.glyphicon-leaf:before{content:\"\\e103\"}.glyphicon-fire:before{content:\"\\e104\"}.glyphicon-eye-open:before{content:\"\\e105\"}.glyphicon-eye-close:before{content:\"\\e106\"}.glyphicon-warning-sign:before{content:\"\\e107\"}.glyphicon-plane:before{content:\"\\e108\"}.glyphicon-calendar:before{content:\"\\e109\"}.glyphicon-random:before{content:\"\\e110\"}.glyphicon-comment:before{content:\"\\e111\"}.glyphicon-magnet:before{content:\"\\e112\"}.glyphicon-chevron-up:before{content:\"\\e113\"}.glyphicon-chevron-down:before{content:\"\\e114\"}.glyphicon-retweet:before{content:\"\\e115\"}.glyphicon-shopping-cart:before{content:\"\\e116\"}.glyphicon-folder-close:before{content:\"\\e117\"}.glyphicon-folder-open:before{content:\"\\e118\"}.glyphicon-resize-vertical:before{content:\"\\e119\"}.glyphicon-resize-horizontal:before{content:\"\\e120\"}.glyphicon-hdd:before{content:\"\\e121\"}.glyphicon-bullhorn:before{content:\"\\e122\"}.glyphicon-bell:before{content:\"\\e123\"}.glyphicon-certificate:before{content:\"\\e124\"}.glyphicon-thumbs-up:before{content:\"\\e125\"}.glyphicon-thumbs-down:before{content:\"\\e126\"}.glyphicon-hand-right:before{content:\"\\e127\"}.glyphicon-hand-left:before{content:\"\\e128\"}.glyphicon-hand-up:before{content:\"\\e129\"}.glyphicon-hand-down:before{content:\"\\e130\"}.glyphicon-circle-arrow-right:before{content:\"\\e131\"}.glyphicon-circle-arrow-left:before{content:\"\\e132\"}.glyphicon-circle-arrow-up:before{content:\"\\e133\"}.glyphicon-circle-arrow-down:before{content:\"\\e134\"}.glyphicon-globe:before{content:\"\\e135\"}.glyphicon-wrench:before{content:\"\\e136\"}.glyphicon-tasks:before{content:\"\\e137\"}.glyphicon-filter:before{content:\"\\e138\"}.glyphicon-briefcase:before{content:\"\\e139\"}.glyphicon-fullscreen:before{content:\"\\e140\"}.glyphicon-dashboard:before{content:\"\\e141\"}.glyphicon-paperclip:before{content:\"\\e142\"}.glyphicon-heart-empty:before{content:\"\\e143\"}.glyphicon-link:before{content:\"\\e144\"}.glyphicon-phone:before{content:\"\\e145\"}.glyphicon-pushpin:before{content:\"\\e146\"}.glyphicon-usd:before{content:\"\\e148\"}.glyphicon-gbp:before{content:\"\\e149\"}.glyphicon-sort:before{content:\"\\e150\"}.glyphicon-sort-by-alphabet:before{content:\"\\e151\"}.glyphicon-sort-by-alphabet-alt:before{content:\"\\e152\"}.glyphicon-sort-by-order:before{content:\"\\e153\"}.glyphicon-sort-by-order-alt:before{content:\"\\e154\"}.glyphicon-sort-by-attributes:before{content:\"\\e155\"}.glyphicon-sort-by-attributes-alt:before{content:\"\\e156\"}.glyphicon-unchecked:before{content:\"\\e157\"}.glyphicon-expand:before{content:\"\\e158\"}.glyphicon-collapse-down:before{content:\"\\e159\"}.glyphicon-collapse-up:before{content:\"\\e160\"}.glyphicon-log-in:before{content:\"\\e161\"}.glyphicon-flash:before{content:\"\\e162\"}.glyphicon-log-out:before{content:\"\\e163\"}.glyphicon-new-window:before{content:\"\\e164\"}.glyphicon-record:before{content:\"\\e165\"}.glyphicon-save:before{content:\"\\e166\"}.glyphicon-open:before{content:\"\\e167\"}.glyphicon-saved:before{content:\"\\e168\"}.glyphicon-import:before{content:\"\\e169\"}.glyphicon-export:before{content:\"\\e170\"}.glyphicon-send:before{content:\"\\e171\"}.glyphicon-floppy-disk:before{content:\"\\e172\"}.glyphicon-floppy-saved:before{content:\"\\e173\"}.glyphicon-floppy-remove:before{content:\"\\e174\"}.glyphicon-floppy-save:before{content:\"\\e175\"}.glyphicon-floppy-open:before{content:\"\\e176\"}.glyphicon-credit-card:before{content:\"\\e177\"}.glyphicon-transfer:before{content:\"\\e178\"}.glyphicon-cutlery:before{content:\"\\e179\"}.glyphicon-header:before{content:\"\\e180\"}.glyphicon-compressed:before{content:\"\\e181\"}.glyphicon-earphone:before{content:\"\\e182\"}.glyphicon-phone-alt:before{content:\"\\e183\"}.glyphicon-tower:before{content:\"\\e184\"}.glyphicon-stats:before{content:\"\\e185\"}.glyphicon-sd-video:before{content:\"\\e186\"}.glyphicon-hd-video:before{content:\"\\e187\"}.glyphicon-subtitles:before{content:\"\\e188\"}.glyphicon-sound-stereo:before{content:\"\\e189\"}.glyphicon-sound-dolby:before{content:\"\\e190\"}.glyphicon-sound-5-1:before{content:\"\\e191\"}.glyphicon-sound-6-1:before{content:\"\\e192\"}.glyphicon-sound-7-1:before{content:\"\\e193\"}.glyphicon-copyright-mark:before{content:\"\\e194\"}.glyphicon-registration-mark:before{content:\"\\e195\"}.glyphicon-cloud-download:before{content:\"\\e197\"}.glyphicon-cloud-upload:before{content:\"\\e198\"}.glyphicon-tree-conifer:before{content:\"\\e199\"}.glyphicon-tree-deciduous:before{content:\"\\e200\"}.glyphicon-cd:before{content:\"\\e201\"}.glyphicon-save-file:before{content:\"\\e202\"}.glyphicon-open-file:before{content:\"\\e203\"}.glyphicon-level-up:before{content:\"\\e204\"}.glyphicon-copy:before{content:\"\\e205\"}.glyphicon-paste:before{content:\"\\e206\"}.glyphicon-alert:before{content:\"\\e209\"}.glyphicon-equalizer:before{content:\"\\e210\"}.glyphicon-king:before{content:\"\\e211\"}.glyphicon-queen:before{content:\"\\e212\"}.glyphicon-pawn:before{content:\"\\e213\"}.glyphicon-bishop:before{content:\"\\e214\"}.glyphicon-knight:before{content:\"\\e215\"}.glyphicon-baby-formula:before{content:\"\\e216\"}.glyphicon-tent:before{content:\"\\26fa\"}.glyphicon-blackboard:before{content:\"\\e218\"}.glyphicon-bed:before{content:\"\\e219\"}.glyphicon-apple:before{content:\"\\f8ff\"}.glyphicon-erase:before{content:\"\\e221\"}.glyphicon-hourglass:before{content:\"\\231b\"}.glyphicon-lamp:before{content:\"\\e223\"}.glyphicon-duplicate:before{content:\"\\e224\"}.glyphicon-piggy-bank:before{content:\"\\e225\"}.glyphicon-scissors:before{content:\"\\e226\"}.glyphicon-bitcoin:before{content:\"\\e227\"}.glyphicon-btc:before{content:\"\\e227\"}.glyphicon-xbt:before{content:\"\\e227\"}.glyphicon-yen:before{content:\"\\00a5\"}.glyphicon-jpy:before{content:\"\\00a5\"}.glyphicon-ruble:before{content:\"\\20bd\"}.glyphicon-rub:before{content:\"\\20bd\"}.glyphicon-scale:before{content:\"\\e230\"}.glyphicon-ice-lolly:before{content:\"\\e231\"}.glyphicon-ice-lolly-tasted:before{content:\"\\e232\"}.glyphicon-education:before{content:\"\\e233\"}.glyphicon-option-horizontal:before{content:\"\\e234\"}.glyphicon-option-vertical:before{content:\"\\e235\"}.glyphicon-menu-hamburger:before{content:\"\\e236\"}.glyphicon-modal-window:before{content:\"\\e237\"}.glyphicon-oil:before{content:\"\\e238\"}.glyphicon-grain:before{content:\"\\e239\"}.glyphicon-sunglasses:before{content:\"\\e240\"}.glyphicon-text-size:before{content:\"\\e241\"}.glyphicon-text-color:before{content:\"\\e242\"}.glyphicon-text-background:before{content:\"\\e243\"}.glyphicon-object-align-top:before{content:\"\\e244\"}.glyphicon-object-align-bottom:before{content:\"\\e245\"}.glyphicon-object-align-horizontal:before{content:\"\\e246\"}.glyphicon-object-align-left:before{content:\"\\e247\"}.glyphicon-object-align-vertical:before{content:\"\\e248\"}.glyphicon-object-align-right:before{content:\"\\e249\"}.glyphicon-triangle-right:before{content:\"\\e250\"}.glyphicon-triangle-left:before{content:\"\\e251\"}.glyphicon-triangle-bottom:before{content:\"\\e252\"}.glyphicon-triangle-top:before{content:\"\\e253\"}.glyphicon-console:before{content:\"\\e254\"}.glyphicon-superscript:before{content:\"\\e255\"}.glyphicon-subscript:before{content:\"\\e256\"}.glyphicon-menu-left:before{content:\"\\e257\"}.glyphicon-menu-right:before{content:\"\\e258\"}.glyphicon-menu-down:before{content:\"\\e259\"}.glyphicon-menu-up:before{content:\"\\e260\"}*{box-sizing:border-box}*:before,*:after{box-sizing:border-box}html{font-size:10px;-webkit-tap-highlight-color:rgba(0,0,0,0)}body{font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:14px;line-height:1.42857143;color:#555555;background-color:#ffffff}input,button,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit}a{color:#2fa4e7;text-decoration:none}a:hover,a:focus{color:#157ab5;text-decoration:underline}a:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}figure{margin:0}img{vertical-align:middle}.img-responsive,.thumbnail>img,.thumbnail a>img,.carousel-inner>.item>img,.carousel-inner>.item>a>img{display:block;max-width:100%;height:auto}.img-rounded{border-radius:6px}.img-thumbnail{padding:4px;line-height:1.42857143;background-color:#ffffff;border:1px solid #dddddd;border-radius:4px;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;display:inline-block;max-width:100%;height:auto}.img-circle{border-radius:50%}hr{margin-top:20px;margin-bottom:20px;border:0;border-top:1px solid #eeeeee}.sr-only{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}[role=\"button\"]{cursor:pointer}h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6{font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-weight:500;line-height:1.2;color:#317eac}h1 small,h2 small,h3 small,h4 small,h5 small,h6 small,.h1 small,.h2 small,.h3 small,.h4 small,.h5 small,.h6 small,h1 .small,h2 .small,h3 .small,h4 .small,h5 .small,h6 .small,.h1 .small,.h2 .small,.h3 .small,.h4 .small,.h5 .small,.h6 .small{font-weight:normal;line-height:1;color:#999999}h1,.h1,h2,.h2,h3,.h3{margin-top:20px;margin-bottom:10px}h1 small,.h1 small,h2 small,.h2 small,h3 small,.h3 small,h1 .small,.h1 .small,h2 .small,.h2 .small,h3 .small,.h3 .small{font-size:65%}h4,.h4,h5,.h5,h6,.h6{margin-top:10px;margin-bottom:10px}h4 small,.h4 small,h5 small,.h5 small,h6 small,.h6 small,h4 .small,.h4 .small,h5 .small,.h5 .small,h6 .small,.h6 .small{font-size:75%}h1,.h1{font-size:36px}h2,.h2{font-size:30px}h3,.h3{font-size:24px}h4,.h4{font-size:18px}h5,.h5{font-size:14px}h6,.h6{font-size:12px}p{margin:0 0 10px}.lead{margin-bottom:20px;font-size:16px;font-weight:300;line-height:1.4}@media (min-width:768px){.lead{font-size:21px}}small,.small{font-size:85%}mark,.mark{background-color:#fcf8e3;padding:.2em}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.text-justify{text-align:justify}.text-nowrap{white-space:nowrap}.text-lowercase{text-transform:lowercase}.text-uppercase{text-transform:uppercase}.text-capitalize{text-transform:capitalize}.text-muted{color:#999999}.text-primary{color:#2fa4e7}a.text-primary:hover,a.text-primary:focus{color:#178acc}.text-success{color:#468847}a.text-success:hover,a.text-success:focus{color:#356635}.text-info{color:#3a87ad}a.text-info:hover,a.text-info:focus{color:#2d6987}.text-warning{color:#c09853}a.text-warning:hover,a.text-warning:focus{color:#a47e3c}.text-danger{color:#b94a48}a.text-danger:hover,a.text-danger:focus{color:#953b39}.bg-primary{color:#fff;background-color:#2fa4e7}a.bg-primary:hover,a.bg-primary:focus{background-color:#178acc}.bg-success{background-color:#dff0d8}a.bg-success:hover,a.bg-success:focus{background-color:#c1e2b3}.bg-info{background-color:#d9edf7}a.bg-info:hover,a.bg-info:focus{background-color:#afd9ee}.bg-warning{background-color:#fcf8e3}a.bg-warning:hover,a.bg-warning:focus{background-color:#f7ecb5}.bg-danger{background-color:#f2dede}a.bg-danger:hover,a.bg-danger:focus{background-color:#e4b9b9}.page-header{padding-bottom:9px;margin:40px 0 20px;border-bottom:1px solid #eeeeee}ul,ol{margin-top:0;margin-bottom:10px}ul ul,ol ul,ul ol,ol ol{margin-bottom:0}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none;margin-left:-5px}.list-inline>li{display:inline-block;padding-left:5px;padding-right:5px}dl{margin-top:0;margin-bottom:20px}dt,dd{line-height:1.42857143}dt{font-weight:bold}dd{margin-left:0}@media (min-width:768px){.dl-horizontal dt{float:left;width:160px;clear:left;text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dl-horizontal dd{margin-left:180px}}abbr[title],abbr[data-original-title]{cursor:help;border-bottom:1px dotted #999999}.initialism{font-size:90%;text-transform:uppercase}blockquote{padding:10px 20px;margin:0 0 20px;font-size:17.5px;border-left:5px solid #eeeeee}blockquote p:last-child,blockquote ul:last-child,blockquote ol:last-child{margin-bottom:0}blockquote footer,blockquote small,blockquote .small{display:block;font-size:80%;line-height:1.42857143;color:#999999}blockquote footer:before,blockquote small:before,blockquote .small:before{content:'\\2014 \\00A0'}.blockquote-reverse,blockquote.pull-right{padding-right:15px;padding-left:0;border-right:5px solid #eeeeee;border-left:0;text-align:right}.blockquote-reverse footer:before,blockquote.pull-right footer:before,.blockquote-reverse small:before,blockquote.pull-right small:before,.blockquote-reverse .small:before,blockquote.pull-right .small:before{content:''}.blockquote-reverse footer:after,blockquote.pull-right footer:after,.blockquote-reverse small:after,blockquote.pull-right small:after,.blockquote-reverse .small:after,blockquote.pull-right .small:after{content:'\\00A0 \\2014'}address{margin-bottom:20px;font-style:normal;line-height:1.42857143}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,\"Courier New\",monospace}code{padding:2px 4px;font-size:90%;color:#c7254e;background-color:#f9f2f4;border-radius:4px}kbd{padding:2px 4px;font-size:90%;color:#ffffff;background-color:#333333;border-radius:3px;box-shadow:inset 0 -1px 0 rgba(0,0,0,0.25)}kbd kbd{padding:0;font-size:100%;font-weight:bold;box-shadow:none}pre{display:block;padding:9.5px;margin:0 0 10px;font-size:13px;line-height:1.42857143;word-break:break-all;word-wrap:break-word;color:#333333;background-color:#f5f5f5;border:1px solid #cccccc;border-radius:4px}pre code{padding:0;font-size:inherit;color:inherit;white-space:pre-wrap;background-color:transparent;border-radius:0}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px}@media (min-width:768px){.container{width:750px}}@media (min-width:992px){.container{width:970px}}@media (min-width:1200px){.container{width:1170px}}.container-fluid{margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px}.row{margin-left:-15px;margin-right:-15px}.col-xs-1,.col-sm-1,.col-md-1,.col-lg-1,.col-xs-2,.col-sm-2,.col-md-2,.col-lg-2,.col-xs-3,.col-sm-3,.col-md-3,.col-lg-3,.col-xs-4,.col-sm-4,.col-md-4,.col-lg-4,.col-xs-5,.col-sm-5,.col-md-5,.col-lg-5,.col-xs-6,.col-sm-6,.col-md-6,.col-lg-6,.col-xs-7,.col-sm-7,.col-md-7,.col-lg-7,.col-xs-8,.col-sm-8,.col-md-8,.col-lg-8,.col-xs-9,.col-sm-9,.col-md-9,.col-lg-9,.col-xs-10,.col-sm-10,.col-md-10,.col-lg-10,.col-xs-11,.col-sm-11,.col-md-11,.col-lg-11,.col-xs-12,.col-sm-12,.col-md-12,.col-lg-12{position:relative;min-height:1px;padding-left:15px;padding-right:15px}.col-xs-1,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9,.col-xs-10,.col-xs-11,.col-xs-12{float:left}.col-xs-12{width:100%}.col-xs-11{width:91.66666667%}.col-xs-10{width:83.33333333%}.col-xs-9{width:75%}.col-xs-8{width:66.66666667%}.col-xs-7{width:58.33333333%}.col-xs-6{width:50%}.col-xs-5{width:41.66666667%}.col-xs-4{width:33.33333333%}.col-xs-3{width:25%}.col-xs-2{width:16.66666667%}.col-xs-1{width:8.33333333%}.col-xs-pull-12{right:100%}.col-xs-pull-11{right:91.66666667%}.col-xs-pull-10{right:83.33333333%}.col-xs-pull-9{right:75%}.col-xs-pull-8{right:66.66666667%}.col-xs-pull-7{right:58.33333333%}.col-xs-pull-6{right:50%}.col-xs-pull-5{right:41.66666667%}.col-xs-pull-4{right:33.33333333%}.col-xs-pull-3{right:25%}.col-xs-pull-2{right:16.66666667%}.col-xs-pull-1{right:8.33333333%}.col-xs-pull-0{right:auto}.col-xs-push-12{left:100%}.col-xs-push-11{left:91.66666667%}.col-xs-push-10{left:83.33333333%}.col-xs-push-9{left:75%}.col-xs-push-8{left:66.66666667%}.col-xs-push-7{left:58.33333333%}.col-xs-push-6{left:50%}.col-xs-push-5{left:41.66666667%}.col-xs-push-4{left:33.33333333%}.col-xs-push-3{left:25%}.col-xs-push-2{left:16.66666667%}.col-xs-push-1{left:8.33333333%}.col-xs-push-0{left:auto}.col-xs-offset-12{margin-left:100%}.col-xs-offset-11{margin-left:91.66666667%}.col-xs-offset-10{margin-left:83.33333333%}.col-xs-offset-9{margin-left:75%}.col-xs-offset-8{margin-left:66.66666667%}.col-xs-offset-7{margin-left:58.33333333%}.col-xs-offset-6{margin-left:50%}.col-xs-offset-5{margin-left:41.66666667%}.col-xs-offset-4{margin-left:33.33333333%}.col-xs-offset-3{margin-left:25%}.col-xs-offset-2{margin-left:16.66666667%}.col-xs-offset-1{margin-left:8.33333333%}.col-xs-offset-0{margin-left:0%}@media (min-width:768px){.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12{float:left}.col-sm-12{width:100%}.col-sm-11{width:91.66666667%}.col-sm-10{width:83.33333333%}.col-sm-9{width:75%}.col-sm-8{width:66.66666667%}.col-sm-7{width:58.33333333%}.col-sm-6{width:50%}.col-sm-5{width:41.66666667%}.col-sm-4{width:33.33333333%}.col-sm-3{width:25%}.col-sm-2{width:16.66666667%}.col-sm-1{width:8.33333333%}.col-sm-pull-12{right:100%}.col-sm-pull-11{right:91.66666667%}.col-sm-pull-10{right:83.33333333%}.col-sm-pull-9{right:75%}.col-sm-pull-8{right:66.66666667%}.col-sm-pull-7{right:58.33333333%}.col-sm-pull-6{right:50%}.col-sm-pull-5{right:41.66666667%}.col-sm-pull-4{right:33.33333333%}.col-sm-pull-3{right:25%}.col-sm-pull-2{right:16.66666667%}.col-sm-pull-1{right:8.33333333%}.col-sm-pull-0{right:auto}.col-sm-push-12{left:100%}.col-sm-push-11{left:91.66666667%}.col-sm-push-10{left:83.33333333%}.col-sm-push-9{left:75%}.col-sm-push-8{left:66.66666667%}.col-sm-push-7{left:58.33333333%}.col-sm-push-6{left:50%}.col-sm-push-5{left:41.66666667%}.col-sm-push-4{left:33.33333333%}.col-sm-push-3{left:25%}.col-sm-push-2{left:16.66666667%}.col-sm-push-1{left:8.33333333%}.col-sm-push-0{left:auto}.col-sm-offset-12{margin-left:100%}.col-sm-offset-11{margin-left:91.66666667%}.col-sm-offset-10{margin-left:83.33333333%}.col-sm-offset-9{margin-left:75%}.col-sm-offset-8{margin-left:66.66666667%}.col-sm-offset-7{margin-left:58.33333333%}.col-sm-offset-6{margin-left:50%}.col-sm-offset-5{margin-left:41.66666667%}.col-sm-offset-4{margin-left:33.33333333%}.col-sm-offset-3{margin-left:25%}.col-sm-offset-2{margin-left:16.66666667%}.col-sm-offset-1{margin-left:8.33333333%}.col-sm-offset-0{margin-left:0%}}@media (min-width:992px){.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12{float:left}.col-md-12{width:100%}.col-md-11{width:91.66666667%}.col-md-10{width:83.33333333%}.col-md-9{width:75%}.col-md-8{width:66.66666667%}.col-md-7{width:58.33333333%}.col-md-6{width:50%}.col-md-5{width:41.66666667%}.col-md-4{width:33.33333333%}.col-md-3{width:25%}.col-md-2{width:16.66666667%}.col-md-1{width:8.33333333%}.col-md-pull-12{right:100%}.col-md-pull-11{right:91.66666667%}.col-md-pull-10{right:83.33333333%}.col-md-pull-9{right:75%}.col-md-pull-8{right:66.66666667%}.col-md-pull-7{right:58.33333333%}.col-md-pull-6{right:50%}.col-md-pull-5{right:41.66666667%}.col-md-pull-4{right:33.33333333%}.col-md-pull-3{right:25%}.col-md-pull-2{right:16.66666667%}.col-md-pull-1{right:8.33333333%}.col-md-pull-0{right:auto}.col-md-push-12{left:100%}.col-md-push-11{left:91.66666667%}.col-md-push-10{left:83.33333333%}.col-md-push-9{left:75%}.col-md-push-8{left:66.66666667%}.col-md-push-7{left:58.33333333%}.col-md-push-6{left:50%}.col-md-push-5{left:41.66666667%}.col-md-push-4{left:33.33333333%}.col-md-push-3{left:25%}.col-md-push-2{left:16.66666667%}.col-md-push-1{left:8.33333333%}.col-md-push-0{left:auto}.col-md-offset-12{margin-left:100%}.col-md-offset-11{margin-left:91.66666667%}.col-md-offset-10{margin-left:83.33333333%}.col-md-offset-9{margin-left:75%}.col-md-offset-8{margin-left:66.66666667%}.col-md-offset-7{margin-left:58.33333333%}.col-md-offset-6{margin-left:50%}.col-md-offset-5{margin-left:41.66666667%}.col-md-offset-4{margin-left:33.33333333%}.col-md-offset-3{margin-left:25%}.col-md-offset-2{margin-left:16.66666667%}.col-md-offset-1{margin-left:8.33333333%}.col-md-offset-0{margin-left:0%}}@media (min-width:1200px){.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12{float:left}.col-lg-12{width:100%}.col-lg-11{width:91.66666667%}.col-lg-10{width:83.33333333%}.col-lg-9{width:75%}.col-lg-8{width:66.66666667%}.col-lg-7{width:58.33333333%}.col-lg-6{width:50%}.col-lg-5{width:41.66666667%}.col-lg-4{width:33.33333333%}.col-lg-3{width:25%}.col-lg-2{width:16.66666667%}.col-lg-1{width:8.33333333%}.col-lg-pull-12{right:100%}.col-lg-pull-11{right:91.66666667%}.col-lg-pull-10{right:83.33333333%}.col-lg-pull-9{right:75%}.col-lg-pull-8{right:66.66666667%}.col-lg-pull-7{right:58.33333333%}.col-lg-pull-6{right:50%}.col-lg-pull-5{right:41.66666667%}.col-lg-pull-4{right:33.33333333%}.col-lg-pull-3{right:25%}.col-lg-pull-2{right:16.66666667%}.col-lg-pull-1{right:8.33333333%}.col-lg-pull-0{right:auto}.col-lg-push-12{left:100%}.col-lg-push-11{left:91.66666667%}.col-lg-push-10{left:83.33333333%}.col-lg-push-9{left:75%}.col-lg-push-8{left:66.66666667%}.col-lg-push-7{left:58.33333333%}.col-lg-push-6{left:50%}.col-lg-push-5{left:41.66666667%}.col-lg-push-4{left:33.33333333%}.col-lg-push-3{left:25%}.col-lg-push-2{left:16.66666667%}.col-lg-push-1{left:8.33333333%}.col-lg-push-0{left:auto}.col-lg-offset-12{margin-left:100%}.col-lg-offset-11{margin-left:91.66666667%}.col-lg-offset-10{margin-left:83.33333333%}.col-lg-offset-9{margin-left:75%}.col-lg-offset-8{margin-left:66.66666667%}.col-lg-offset-7{margin-left:58.33333333%}.col-lg-offset-6{margin-left:50%}.col-lg-offset-5{margin-left:41.66666667%}.col-lg-offset-4{margin-left:33.33333333%}.col-lg-offset-3{margin-left:25%}.col-lg-offset-2{margin-left:16.66666667%}.col-lg-offset-1{margin-left:8.33333333%}.col-lg-offset-0{margin-left:0%}}table{background-color:transparent}caption{padding-top:8px;padding-bottom:8px;color:#999999;text-align:left}th{text-align:left}.table{width:100%;max-width:100%;margin-bottom:20px}.table>thead>tr>th,.table>tbody>tr>th,.table>tfoot>tr>th,.table>thead>tr>td,.table>tbody>tr>td,.table>tfoot>tr>td{padding:8px;line-height:1.42857143;vertical-align:top;border-top:1px solid #dddddd}.table>thead>tr>th{vertical-align:bottom;border-bottom:2px solid #dddddd}.table>caption+thead>tr:first-child>th,.table>colgroup+thead>tr:first-child>th,.table>thead:first-child>tr:first-child>th,.table>caption+thead>tr:first-child>td,.table>colgroup+thead>tr:first-child>td,.table>thead:first-child>tr:first-child>td{border-top:0}.table>tbody+tbody{border-top:2px solid #dddddd}.table .table{background-color:#ffffff}.table-condensed>thead>tr>th,.table-condensed>tbody>tr>th,.table-condensed>tfoot>tr>th,.table-condensed>thead>tr>td,.table-condensed>tbody>tr>td,.table-condensed>tfoot>tr>td{padding:5px}.table-bordered{border:1px solid #dddddd}.table-bordered>thead>tr>th,.table-bordered>tbody>tr>th,.table-bordered>tfoot>tr>th,.table-bordered>thead>tr>td,.table-bordered>tbody>tr>td,.table-bordered>tfoot>tr>td{border:1px solid #dddddd}.table-bordered>thead>tr>th,.table-bordered>thead>tr>td{border-bottom-width:2px}.table-striped>tbody>tr:nth-of-type(odd){background-color:#f9f9f9}.table-hover>tbody>tr:hover{background-color:#f5f5f5}table col[class*=\"col-\"]{position:static;float:none;display:table-column}table td[class*=\"col-\"],table th[class*=\"col-\"]{position:static;float:none;display:table-cell}.table>thead>tr>td.active,.table>tbody>tr>td.active,.table>tfoot>tr>td.active,.table>thead>tr>th.active,.table>tbody>tr>th.active,.table>tfoot>tr>th.active,.table>thead>tr.active>td,.table>tbody>tr.active>td,.table>tfoot>tr.active>td,.table>thead>tr.active>th,.table>tbody>tr.active>th,.table>tfoot>tr.active>th{background-color:#f5f5f5}.table-hover>tbody>tr>td.active:hover,.table-hover>tbody>tr>th.active:hover,.table-hover>tbody>tr.active:hover>td,.table-hover>tbody>tr:hover>.active,.table-hover>tbody>tr.active:hover>th{background-color:#e8e8e8}.table>thead>tr>td.success,.table>tbody>tr>td.success,.table>tfoot>tr>td.success,.table>thead>tr>th.success,.table>tbody>tr>th.success,.table>tfoot>tr>th.success,.table>thead>tr.success>td,.table>tbody>tr.success>td,.table>tfoot>tr.success>td,.table>thead>tr.success>th,.table>tbody>tr.success>th,.table>tfoot>tr.success>th{background-color:#dff0d8}.table-hover>tbody>tr>td.success:hover,.table-hover>tbody>tr>th.success:hover,.table-hover>tbody>tr.success:hover>td,.table-hover>tbody>tr:hover>.success,.table-hover>tbody>tr.success:hover>th{background-color:#d0e9c6}.table>thead>tr>td.info,.table>tbody>tr>td.info,.table>tfoot>tr>td.info,.table>thead>tr>th.info,.table>tbody>tr>th.info,.table>tfoot>tr>th.info,.table>thead>tr.info>td,.table>tbody>tr.info>td,.table>tfoot>tr.info>td,.table>thead>tr.info>th,.table>tbody>tr.info>th,.table>tfoot>tr.info>th{background-color:#d9edf7}.table-hover>tbody>tr>td.info:hover,.table-hover>tbody>tr>th.info:hover,.table-hover>tbody>tr.info:hover>td,.table-hover>tbody>tr:hover>.info,.table-hover>tbody>tr.info:hover>th{background-color:#c4e3f3}.table>thead>tr>td.warning,.table>tbody>tr>td.warning,.table>tfoot>tr>td.warning,.table>thead>tr>th.warning,.table>tbody>tr>th.warning,.table>tfoot>tr>th.warning,.table>thead>tr.warning>td,.table>tbody>tr.warning>td,.table>tfoot>tr.warning>td,.table>thead>tr.warning>th,.table>tbody>tr.warning>th,.table>tfoot>tr.warning>th{background-color:#fcf8e3}.table-hover>tbody>tr>td.warning:hover,.table-hover>tbody>tr>th.warning:hover,.table-hover>tbody>tr.warning:hover>td,.table-hover>tbody>tr:hover>.warning,.table-hover>tbody>tr.warning:hover>th{background-color:#faf2cc}.table>thead>tr>td.danger,.table>tbody>tr>td.danger,.table>tfoot>tr>td.danger,.table>thead>tr>th.danger,.table>tbody>tr>th.danger,.table>tfoot>tr>th.danger,.table>thead>tr.danger>td,.table>tbody>tr.danger>td,.table>tfoot>tr.danger>td,.table>thead>tr.danger>th,.table>tbody>tr.danger>th,.table>tfoot>tr.danger>th{background-color:#f2dede}.table-hover>tbody>tr>td.danger:hover,.table-hover>tbody>tr>th.danger:hover,.table-hover>tbody>tr.danger:hover>td,.table-hover>tbody>tr:hover>.danger,.table-hover>tbody>tr.danger:hover>th{background-color:#ebcccc}.table-responsive{overflow-x:auto;min-height:0.01%}@media screen and (max-width:767px){.table-responsive{width:100%;margin-bottom:15px;overflow-y:hidden;-ms-overflow-style:-ms-autohiding-scrollbar;border:1px solid #dddddd}.table-responsive>.table{margin-bottom:0}.table-responsive>.table>thead>tr>th,.table-responsive>.table>tbody>tr>th,.table-responsive>.table>tfoot>tr>th,.table-responsive>.table>thead>tr>td,.table-responsive>.table>tbody>tr>td,.table-responsive>.table>tfoot>tr>td{white-space:nowrap}.table-responsive>.table-bordered{border:0}.table-responsive>.table-bordered>thead>tr>th:first-child,.table-responsive>.table-bordered>tbody>tr>th:first-child,.table-responsive>.table-bordered>tfoot>tr>th:first-child,.table-responsive>.table-bordered>thead>tr>td:first-child,.table-responsive>.table-bordered>tbody>tr>td:first-child,.table-responsive>.table-bordered>tfoot>tr>td:first-child{border-left:0}.table-responsive>.table-bordered>thead>tr>th:last-child,.table-responsive>.table-bordered>tbody>tr>th:last-child,.table-responsive>.table-bordered>tfoot>tr>th:last-child,.table-responsive>.table-bordered>thead>tr>td:last-child,.table-responsive>.table-bordered>tbody>tr>td:last-child,.table-responsive>.table-bordered>tfoot>tr>td:last-child{border-right:0}.table-responsive>.table-bordered>tbody>tr:last-child>th,.table-responsive>.table-bordered>tfoot>tr:last-child>th,.table-responsive>.table-bordered>tbody>tr:last-child>td,.table-responsive>.table-bordered>tfoot>tr:last-child>td{border-bottom:0}}fieldset{padding:0;margin:0;border:0;min-width:0}legend{display:block;width:100%;padding:0;margin-bottom:20px;font-size:21px;line-height:inherit;color:#555555;border:0;border-bottom:1px solid #e5e5e5}label{display:inline-block;max-width:100%;margin-bottom:5px;font-weight:bold}input[type=\"search\"]{box-sizing:border-box}input[type=\"radio\"],input[type=\"checkbox\"]{margin:4px 0 0;margin-top:1px \\9;line-height:normal}input[type=\"file\"]{display:block}input[type=\"range\"]{display:block;width:100%}select[multiple],select[size]{height:auto}input[type=\"file\"]:focus,input[type=\"radio\"]:focus,input[type=\"checkbox\"]:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}output{display:block;padding-top:9px;font-size:14px;line-height:1.42857143;color:#555555}.form-control{display:block;width:100%;height:38px;padding:8px 12px;font-size:14px;line-height:1.42857143;color:#555555;background-color:#ffffff;background-image:none;border:1px solid #cccccc;border-radius:4px;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);-webkit-transition:border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;-webkit-transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s}.form-control:focus{border-color:#66afe9;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(102,175,233,0.6)}.form-control::-moz-placeholder{color:#999999;opacity:1}.form-control:-ms-input-placeholder{color:#999999}.form-control::-webkit-input-placeholder{color:#999999}.form-control::-ms-expand{border:0;background-color:transparent}.form-control[disabled],.form-control[readonly],fieldset[disabled] .form-control{background-color:#eeeeee;opacity:1}.form-control[disabled],fieldset[disabled] .form-control{cursor:not-allowed}textarea.form-control{height:auto}input[type=\"search\"]{-webkit-appearance:none}@media screen and (-webkit-min-device-pixel-ratio:0){input[type=\"date\"].form-control,input[type=\"time\"].form-control,input[type=\"datetime-local\"].form-control,input[type=\"month\"].form-control{line-height:38px}input[type=\"date\"].input-sm,input[type=\"time\"].input-sm,input[type=\"datetime-local\"].input-sm,input[type=\"month\"].input-sm,.input-group-sm input[type=\"date\"],.input-group-sm input[type=\"time\"],.input-group-sm input[type=\"datetime-local\"],.input-group-sm input[type=\"month\"]{line-height:30px}input[type=\"date\"].input-lg,input[type=\"time\"].input-lg,input[type=\"datetime-local\"].input-lg,input[type=\"month\"].input-lg,.input-group-lg input[type=\"date\"],.input-group-lg input[type=\"time\"],.input-group-lg input[type=\"datetime-local\"],.input-group-lg input[type=\"month\"]{line-height:54px}}.form-group{margin-bottom:15px}.radio,.checkbox{position:relative;display:block;margin-top:10px;margin-bottom:10px}.radio label,.checkbox label{min-height:20px;padding-left:20px;margin-bottom:0;font-weight:normal;cursor:pointer}.radio input[type=\"radio\"],.radio-inline input[type=\"radio\"],.checkbox input[type=\"checkbox\"],.checkbox-inline input[type=\"checkbox\"]{position:absolute;margin-left:-20px;margin-top:4px \\9}.radio+.radio,.checkbox+.checkbox{margin-top:-5px}.radio-inline,.checkbox-inline{position:relative;display:inline-block;padding-left:20px;margin-bottom:0;vertical-align:middle;font-weight:normal;cursor:pointer}.radio-inline+.radio-inline,.checkbox-inline+.checkbox-inline{margin-top:0;margin-left:10px}input[type=\"radio\"][disabled],input[type=\"checkbox\"][disabled],input[type=\"radio\"].disabled,input[type=\"checkbox\"].disabled,fieldset[disabled] input[type=\"radio\"],fieldset[disabled] input[type=\"checkbox\"]{cursor:not-allowed}.radio-inline.disabled,.checkbox-inline.disabled,fieldset[disabled] .radio-inline,fieldset[disabled] .checkbox-inline{cursor:not-allowed}.radio.disabled label,.checkbox.disabled label,fieldset[disabled] .radio label,fieldset[disabled] .checkbox label{cursor:not-allowed}.form-control-static{padding-top:9px;padding-bottom:9px;margin-bottom:0;min-height:34px}.form-control-static.input-lg,.form-control-static.input-sm{padding-left:0;padding-right:0}.input-sm{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}select.input-sm{height:30px;line-height:30px}textarea.input-sm,select[multiple].input-sm{height:auto}.form-group-sm .form-control{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.form-group-sm select.form-control{height:30px;line-height:30px}.form-group-sm textarea.form-control,.form-group-sm select[multiple].form-control{height:auto}.form-group-sm .form-control-static{height:30px;min-height:32px;padding:6px 10px;font-size:12px;line-height:1.5}.input-lg{height:54px;padding:14px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}select.input-lg{height:54px;line-height:54px}textarea.input-lg,select[multiple].input-lg{height:auto}.form-group-lg .form-control{height:54px;padding:14px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}.form-group-lg select.form-control{height:54px;line-height:54px}.form-group-lg textarea.form-control,.form-group-lg select[multiple].form-control{height:auto}.form-group-lg .form-control-static{height:54px;min-height:38px;padding:15px 16px;font-size:18px;line-height:1.3333333}.has-feedback{position:relative}.has-feedback .form-control{padding-right:47.5px}.form-control-feedback{position:absolute;top:0;right:0;z-index:2;display:block;width:38px;height:38px;line-height:38px;text-align:center;pointer-events:none}.input-lg+.form-control-feedback,.input-group-lg+.form-control-feedback,.form-group-lg .form-control+.form-control-feedback{width:54px;height:54px;line-height:54px}.input-sm+.form-control-feedback,.input-group-sm+.form-control-feedback,.form-group-sm .form-control+.form-control-feedback{width:30px;height:30px;line-height:30px}.has-success .help-block,.has-success .control-label,.has-success .radio,.has-success .checkbox,.has-success .radio-inline,.has-success .checkbox-inline,.has-success.radio label,.has-success.checkbox label,.has-success.radio-inline label,.has-success.checkbox-inline label{color:#468847}.has-success .form-control{border-color:#468847;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}.has-success .form-control:focus{border-color:#356635;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #7aba7b}.has-success .input-group-addon{color:#468847;border-color:#468847;background-color:#dff0d8}.has-success .form-control-feedback{color:#468847}.has-warning .help-block,.has-warning .control-label,.has-warning .radio,.has-warning .checkbox,.has-warning .radio-inline,.has-warning .checkbox-inline,.has-warning.radio label,.has-warning.checkbox label,.has-warning.radio-inline label,.has-warning.checkbox-inline label{color:#c09853}.has-warning .form-control{border-color:#c09853;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}.has-warning .form-control:focus{border-color:#a47e3c;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #dbc59e}.has-warning .input-group-addon{color:#c09853;border-color:#c09853;background-color:#fcf8e3}.has-warning .form-control-feedback{color:#c09853}.has-error .help-block,.has-error .control-label,.has-error .radio,.has-error .checkbox,.has-error .radio-inline,.has-error .checkbox-inline,.has-error.radio label,.has-error.checkbox label,.has-error.radio-inline label,.has-error.checkbox-inline label{color:#b94a48}.has-error .form-control{border-color:#b94a48;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}.has-error .form-control:focus{border-color:#953b39;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #d59392}.has-error .input-group-addon{color:#b94a48;border-color:#b94a48;background-color:#f2dede}.has-error .form-control-feedback{color:#b94a48}.has-feedback label~.form-control-feedback{top:25px}.has-feedback label.sr-only~.form-control-feedback{top:0}.help-block{display:block;margin-top:5px;margin-bottom:10px;color:#959595}@media (min-width:768px){.form-inline .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-static{display:inline-block}.form-inline .input-group{display:inline-table;vertical-align:middle}.form-inline .input-group .input-group-addon,.form-inline .input-group .input-group-btn,.form-inline .input-group .form-control{width:auto}.form-inline .input-group>.form-control{width:100%}.form-inline .control-label{margin-bottom:0;vertical-align:middle}.form-inline .radio,.form-inline .checkbox{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.form-inline .radio label,.form-inline .checkbox label{padding-left:0}.form-inline .radio input[type=\"radio\"],.form-inline .checkbox input[type=\"checkbox\"]{position:relative;margin-left:0}.form-inline .has-feedback .form-control-feedback{top:0}}.form-horizontal .radio,.form-horizontal .checkbox,.form-horizontal .radio-inline,.form-horizontal .checkbox-inline{margin-top:0;margin-bottom:0;padding-top:9px}.form-horizontal .radio,.form-horizontal .checkbox{min-height:29px}.form-horizontal .form-group{margin-left:-15px;margin-right:-15px}@media (min-width:768px){.form-horizontal .control-label{text-align:right;margin-bottom:0;padding-top:9px}}.form-horizontal .has-feedback .form-control-feedback{right:15px}@media (min-width:768px){.form-horizontal .form-group-lg .control-label{padding-top:15px;font-size:18px}}@media (min-width:768px){.form-horizontal .form-group-sm .control-label{padding-top:6px;font-size:12px}}.btn{display:inline-block;margin-bottom:0;font-weight:normal;text-align:center;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid transparent;white-space:nowrap;padding:8px 12px;font-size:14px;line-height:1.42857143;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.btn:focus,.btn:active:focus,.btn.active:focus,.btn.focus,.btn:active.focus,.btn.active.focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}.btn:hover,.btn:focus,.btn.focus{color:#555555;text-decoration:none}.btn:active,.btn.active{outline:0;background-image:none;box-shadow:inset 0 3px 5px rgba(0,0,0,0.125)}.btn.disabled,.btn[disabled],fieldset[disabled] .btn{cursor:not-allowed;opacity:0.65;filter:alpha(opacity=65);box-shadow:none}a.btn.disabled,fieldset[disabled] a.btn{pointer-events:none}.btn-default{color:#555555;background-color:#ffffff;border-color:rgba(0,0,0,0.1)}.btn-default:focus,.btn-default.focus{color:#555555;background-color:#e6e6e6;border-color:rgba(0,0,0,0.1)}.btn-default:hover{color:#555555;background-color:#e6e6e6;border-color:rgba(0,0,0,0.1)}.btn-default:active,.btn-default.active,.open>.dropdown-toggle.btn-default{color:#555555;background-color:#e6e6e6;border-color:rgba(0,0,0,0.1)}.btn-default:active:hover,.btn-default.active:hover,.open>.dropdown-toggle.btn-default:hover,.btn-default:active:focus,.btn-default.active:focus,.open>.dropdown-toggle.btn-default:focus,.btn-default:active.focus,.btn-default.active.focus,.open>.dropdown-toggle.btn-default.focus{color:#555555;background-color:#d4d4d4;border-color:rgba(0,0,0,0.1)}.btn-default:active,.btn-default.active,.open>.dropdown-toggle.btn-default{background-image:none}.btn-default.disabled:hover,.btn-default[disabled]:hover,fieldset[disabled] .btn-default:hover,.btn-default.disabled:focus,.btn-default[disabled]:focus,fieldset[disabled] .btn-default:focus,.btn-default.disabled.focus,.btn-default[disabled].focus,fieldset[disabled] .btn-default.focus{background-color:#ffffff;border-color:rgba(0,0,0,0.1)}.btn-default .badge{color:#ffffff;background-color:#555555}.btn-primary{color:#ffffff;background-color:#2fa4e7;border-color:#2fa4e7}.btn-primary:focus,.btn-primary.focus{color:#ffffff;background-color:#178acc;border-color:#105b87}.btn-primary:hover{color:#ffffff;background-color:#178acc;border-color:#1684c2}.btn-primary:active,.btn-primary.active,.open>.dropdown-toggle.btn-primary{color:#ffffff;background-color:#178acc;border-color:#1684c2}.btn-primary:active:hover,.btn-primary.active:hover,.open>.dropdown-toggle.btn-primary:hover,.btn-primary:active:focus,.btn-primary.active:focus,.open>.dropdown-toggle.btn-primary:focus,.btn-primary:active.focus,.btn-primary.active.focus,.open>.dropdown-toggle.btn-primary.focus{color:#ffffff;background-color:#1474ac;border-color:#105b87}.btn-primary:active,.btn-primary.active,.open>.dropdown-toggle.btn-primary{background-image:none}.btn-primary.disabled:hover,.btn-primary[disabled]:hover,fieldset[disabled] .btn-primary:hover,.btn-primary.disabled:focus,.btn-primary[disabled]:focus,fieldset[disabled] .btn-primary:focus,.btn-primary.disabled.focus,.btn-primary[disabled].focus,fieldset[disabled] .btn-primary.focus{background-color:#2fa4e7;border-color:#2fa4e7}.btn-primary .badge{color:#2fa4e7;background-color:#ffffff}.btn-success{color:#ffffff;background-color:#73a839;border-color:#73a839}.btn-success:focus,.btn-success.focus{color:#ffffff;background-color:#59822c;border-color:#324919}.btn-success:hover{color:#ffffff;background-color:#59822c;border-color:#547a29}.btn-success:active,.btn-success.active,.open>.dropdown-toggle.btn-success{color:#ffffff;background-color:#59822c;border-color:#547a29}.btn-success:active:hover,.btn-success.active:hover,.open>.dropdown-toggle.btn-success:hover,.btn-success:active:focus,.btn-success.active:focus,.open>.dropdown-toggle.btn-success:focus,.btn-success:active.focus,.btn-success.active.focus,.open>.dropdown-toggle.btn-success.focus{color:#ffffff;background-color:#476723;border-color:#324919}.btn-success:active,.btn-success.active,.open>.dropdown-toggle.btn-success{background-image:none}.btn-success.disabled:hover,.btn-success[disabled]:hover,fieldset[disabled] .btn-success:hover,.btn-success.disabled:focus,.btn-success[disabled]:focus,fieldset[disabled] .btn-success:focus,.btn-success.disabled.focus,.btn-success[disabled].focus,fieldset[disabled] .btn-success.focus{background-color:#73a839;border-color:#73a839}.btn-success .badge{color:#73a839;background-color:#ffffff}.btn-info{color:#ffffff;background-color:#033c73;border-color:#033c73}.btn-info:focus,.btn-info.focus{color:#ffffff;background-color:#022241;border-color:#000000}.btn-info:hover{color:#ffffff;background-color:#022241;border-color:#011d37}.btn-info:active,.btn-info.active,.open>.dropdown-toggle.btn-info{color:#ffffff;background-color:#022241;border-color:#011d37}.btn-info:active:hover,.btn-info.active:hover,.open>.dropdown-toggle.btn-info:hover,.btn-info:active:focus,.btn-info.active:focus,.open>.dropdown-toggle.btn-info:focus,.btn-info:active.focus,.btn-info.active.focus,.open>.dropdown-toggle.btn-info.focus{color:#ffffff;background-color:#01101f;border-color:#000000}.btn-info:active,.btn-info.active,.open>.dropdown-toggle.btn-info{background-image:none}.btn-info.disabled:hover,.btn-info[disabled]:hover,fieldset[disabled] .btn-info:hover,.btn-info.disabled:focus,.btn-info[disabled]:focus,fieldset[disabled] .btn-info:focus,.btn-info.disabled.focus,.btn-info[disabled].focus,fieldset[disabled] .btn-info.focus{background-color:#033c73;border-color:#033c73}.btn-info .badge{color:#033c73;background-color:#ffffff}.btn-warning{color:#ffffff;background-color:#dd5600;border-color:#dd5600}.btn-warning:focus,.btn-warning.focus{color:#ffffff;background-color:#aa4200;border-color:#5e2400}.btn-warning:hover{color:#ffffff;background-color:#aa4200;border-color:#a03e00}.btn-warning:active,.btn-warning.active,.open>.dropdown-toggle.btn-warning{color:#ffffff;background-color:#aa4200;border-color:#a03e00}.btn-warning:active:hover,.btn-warning.active:hover,.open>.dropdown-toggle.btn-warning:hover,.btn-warning:active:focus,.btn-warning.active:focus,.open>.dropdown-toggle.btn-warning:focus,.btn-warning:active.focus,.btn-warning.active.focus,.open>.dropdown-toggle.btn-warning.focus{color:#ffffff;background-color:#863400;border-color:#5e2400}.btn-warning:active,.btn-warning.active,.open>.dropdown-toggle.btn-warning{background-image:none}.btn-warning.disabled:hover,.btn-warning[disabled]:hover,fieldset[disabled] .btn-warning:hover,.btn-warning.disabled:focus,.btn-warning[disabled]:focus,fieldset[disabled] .btn-warning:focus,.btn-warning.disabled.focus,.btn-warning[disabled].focus,fieldset[disabled] .btn-warning.focus{background-color:#dd5600;border-color:#dd5600}.btn-warning .badge{color:#dd5600;background-color:#ffffff}.btn-danger{color:#ffffff;background-color:#c71c22;border-color:#c71c22}.btn-danger:focus,.btn-danger.focus{color:#ffffff;background-color:#9a161a;border-color:#570c0f}.btn-danger:hover{color:#ffffff;background-color:#9a161a;border-color:#911419}.btn-danger:active,.btn-danger.active,.open>.dropdown-toggle.btn-danger{color:#ffffff;background-color:#9a161a;border-color:#911419}.btn-danger:active:hover,.btn-danger.active:hover,.open>.dropdown-toggle.btn-danger:hover,.btn-danger:active:focus,.btn-danger.active:focus,.open>.dropdown-toggle.btn-danger:focus,.btn-danger:active.focus,.btn-danger.active.focus,.open>.dropdown-toggle.btn-danger.focus{color:#ffffff;background-color:#7b1115;border-color:#570c0f}.btn-danger:active,.btn-danger.active,.open>.dropdown-toggle.btn-danger{background-image:none}.btn-danger.disabled:hover,.btn-danger[disabled]:hover,fieldset[disabled] .btn-danger:hover,.btn-danger.disabled:focus,.btn-danger[disabled]:focus,fieldset[disabled] .btn-danger:focus,.btn-danger.disabled.focus,.btn-danger[disabled].focus,fieldset[disabled] .btn-danger.focus{background-color:#c71c22;border-color:#c71c22}.btn-danger .badge{color:#c71c22;background-color:#ffffff}.btn-link{color:#2fa4e7;font-weight:normal;border-radius:0}.btn-link,.btn-link:active,.btn-link.active,.btn-link[disabled],fieldset[disabled] .btn-link{background-color:transparent;box-shadow:none}.btn-link,.btn-link:hover,.btn-link:focus,.btn-link:active{border-color:transparent}.btn-link:hover,.btn-link:focus{color:#157ab5;text-decoration:underline;background-color:transparent}.btn-link[disabled]:hover,fieldset[disabled] .btn-link:hover,.btn-link[disabled]:focus,fieldset[disabled] .btn-link:focus{color:#999999;text-decoration:none}.btn-lg,.btn-group-lg>.btn{padding:14px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}.btn-sm,.btn-group-sm>.btn{padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.btn-xs,.btn-group-xs>.btn{padding:1px 5px;font-size:12px;line-height:1.5;border-radius:3px}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:5px}input[type=\"submit\"].btn-block,input[type=\"reset\"].btn-block,input[type=\"button\"].btn-block{width:100%}.fade{opacity:0;-webkit-transition:opacity 0.15s linear;transition:opacity 0.15s linear}.fade.in{opacity:1}.collapse{display:none}.collapse.in{display:block}tr.collapse.in{display:table-row}tbody.collapse.in{display:table-row-group}.collapsing{position:relative;height:0;overflow:hidden;-webkit-transition-property:height, visibility;transition-property:height, visibility;-webkit-transition-duration:0.35s;transition-duration:0.35s;-webkit-transition-timing-function:ease;transition-timing-function:ease}.caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-top:4px solid \\9;border-right:4px solid transparent;border-left:4px solid transparent}.dropup,.dropdown{position:relative}.dropdown-toggle:focus{outline:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:160px;padding:5px 0;margin:2px 0 0;list-style:none;font-size:14px;text-align:left;background-color:#ffffff;border:1px solid #cccccc;border:1px solid rgba(0,0,0,0.15);border-radius:4px;box-shadow:0 6px 12px rgba(0,0,0,0.175);background-clip:padding-box}.dropdown-menu.pull-right{right:0;left:auto}.dropdown-menu .divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.dropdown-menu>li>a{display:block;padding:3px 20px;clear:both;font-weight:normal;line-height:1.42857143;color:#333333;white-space:nowrap}.dropdown-menu>li>a:hover,.dropdown-menu>li>a:focus{text-decoration:none;color:#ffffff;background-color:#2fa4e7}.dropdown-menu>.active>a,.dropdown-menu>.active>a:hover,.dropdown-menu>.active>a:focus{color:#ffffff;text-decoration:none;outline:0;background-color:#2fa4e7}.dropdown-menu>.disabled>a,.dropdown-menu>.disabled>a:hover,.dropdown-menu>.disabled>a:focus{color:#999999}.dropdown-menu>.disabled>a:hover,.dropdown-menu>.disabled>a:focus{text-decoration:none;background-color:transparent;background-image:none;filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);cursor:not-allowed}.open>.dropdown-menu{display:block}.open>a{outline:0}.dropdown-menu-right{left:auto;right:0}.dropdown-menu-left{left:0;right:auto}.dropdown-header{display:block;padding:3px 20px;font-size:12px;line-height:1.42857143;color:#999999;white-space:nowrap}.dropdown-backdrop{position:fixed;left:0;right:0;bottom:0;top:0;z-index:990}.pull-right>.dropdown-menu{right:0;left:auto}.dropup .caret,.navbar-fixed-bottom .dropdown .caret{border-top:0;border-bottom:4px dashed;border-bottom:4px solid \\9;content:\"\"}.dropup .dropdown-menu,.navbar-fixed-bottom .dropdown .dropdown-menu{top:auto;bottom:100%;margin-bottom:2px}@media (min-width:768px){.navbar-right .dropdown-menu{left:auto;right:0}.navbar-right .dropdown-menu-left{left:0;right:auto}}.btn-group,.btn-group-vertical{position:relative;display:inline-block;vertical-align:middle}.btn-group>.btn,.btn-group-vertical>.btn{position:relative;float:left}.btn-group>.btn:hover,.btn-group-vertical>.btn:hover,.btn-group>.btn:focus,.btn-group-vertical>.btn:focus,.btn-group>.btn:active,.btn-group-vertical>.btn:active,.btn-group>.btn.active,.btn-group-vertical>.btn.active{z-index:2}.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group{margin-left:-1px}.btn-toolbar{margin-left:-5px}.btn-toolbar .btn,.btn-toolbar .btn-group,.btn-toolbar .input-group{float:left}.btn-toolbar>.btn,.btn-toolbar>.btn-group,.btn-toolbar>.input-group{margin-left:5px}.btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle){border-radius:0}.btn-group>.btn:first-child{margin-left:0}.btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-top-right-radius:0}.btn-group>.btn:last-child:not(:first-child),.btn-group>.dropdown-toggle:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.btn-group>.btn-group{float:left}.btn-group>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-bottom-right-radius:0;border-top-right-radius:0}.btn-group>.btn-group:last-child:not(:first-child)>.btn:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.btn-group .dropdown-toggle:active,.btn-group.open .dropdown-toggle{outline:0}.btn-group>.btn+.dropdown-toggle{padding-left:8px;padding-right:8px}.btn-group>.btn-lg+.dropdown-toggle{padding-left:12px;padding-right:12px}.btn-group.open .dropdown-toggle{box-shadow:inset 0 3px 5px rgba(0,0,0,0.125)}.btn-group.open .dropdown-toggle.btn-link{box-shadow:none}.btn .caret{margin-left:0}.btn-lg .caret{border-width:5px 5px 0;border-bottom-width:0}.dropup .btn-lg .caret{border-width:0 5px 5px}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group,.btn-group-vertical>.btn-group>.btn{display:block;float:none;width:100%;max-width:100%}.btn-group-vertical>.btn-group>.btn{float:none}.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group{margin-top:-1px;margin-left:0}.btn-group-vertical>.btn:not(:first-child):not(:last-child){border-radius:0}.btn-group-vertical>.btn:first-child:not(:last-child){border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn:last-child:not(:first-child){border-top-right-radius:0;border-top-left-radius:0;border-bottom-right-radius:4px;border-bottom-left-radius:4px}.btn-group-vertical>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group-vertical>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group-vertical>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:last-child:not(:first-child)>.btn:first-child{border-top-right-radius:0;border-top-left-radius:0}.btn-group-justified{display:table;width:100%;table-layout:fixed;border-collapse:separate}.btn-group-justified>.btn,.btn-group-justified>.btn-group{float:none;display:table-cell;width:1%}.btn-group-justified>.btn-group .btn{width:100%}.btn-group-justified>.btn-group .dropdown-menu{left:auto}[data-toggle=\"buttons\"]>.btn input[type=\"radio\"],[data-toggle=\"buttons\"]>.btn-group>.btn input[type=\"radio\"],[data-toggle=\"buttons\"]>.btn input[type=\"checkbox\"],[data-toggle=\"buttons\"]>.btn-group>.btn input[type=\"checkbox\"]{position:absolute;clip:rect(0, 0, 0, 0);pointer-events:none}.input-group{position:relative;display:table;border-collapse:separate}.input-group[class*=\"col-\"]{float:none;padding-left:0;padding-right:0}.input-group .form-control{position:relative;z-index:2;float:left;width:100%;margin-bottom:0}.input-group .form-control:focus{z-index:3}.input-group-lg>.form-control,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.btn{height:54px;padding:14px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}select.input-group-lg>.form-control,select.input-group-lg>.input-group-addon,select.input-group-lg>.input-group-btn>.btn{height:54px;line-height:54px}textarea.input-group-lg>.form-control,textarea.input-group-lg>.input-group-addon,textarea.input-group-lg>.input-group-btn>.btn,select[multiple].input-group-lg>.form-control,select[multiple].input-group-lg>.input-group-addon,select[multiple].input-group-lg>.input-group-btn>.btn{height:auto}.input-group-sm>.form-control,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.btn{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}select.input-group-sm>.form-control,select.input-group-sm>.input-group-addon,select.input-group-sm>.input-group-btn>.btn{height:30px;line-height:30px}textarea.input-group-sm>.form-control,textarea.input-group-sm>.input-group-addon,textarea.input-group-sm>.input-group-btn>.btn,select[multiple].input-group-sm>.form-control,select[multiple].input-group-sm>.input-group-addon,select[multiple].input-group-sm>.input-group-btn>.btn{height:auto}.input-group-addon,.input-group-btn,.input-group .form-control{display:table-cell}.input-group-addon:not(:first-child):not(:last-child),.input-group-btn:not(:first-child):not(:last-child),.input-group .form-control:not(:first-child):not(:last-child){border-radius:0}.input-group-addon,.input-group-btn{width:1%;white-space:nowrap;vertical-align:middle}.input-group-addon{padding:8px 12px;font-size:14px;font-weight:normal;line-height:1;color:#555555;text-align:center;background-color:#eeeeee;border:1px solid #cccccc;border-radius:4px}.input-group-addon.input-sm{padding:5px 10px;font-size:12px;border-radius:3px}.input-group-addon.input-lg{padding:14px 16px;font-size:18px;border-radius:6px}.input-group-addon input[type=\"radio\"],.input-group-addon input[type=\"checkbox\"]{margin-top:0}.input-group .form-control:first-child,.input-group-addon:first-child,.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group>.btn,.input-group-btn:first-child>.dropdown-toggle,.input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group-btn:last-child>.btn-group:not(:last-child)>.btn{border-bottom-right-radius:0;border-top-right-radius:0}.input-group-addon:first-child{border-right:0}.input-group .form-control:last-child,.input-group-addon:last-child,.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group>.btn,.input-group-btn:last-child>.dropdown-toggle,.input-group-btn:first-child>.btn:not(:first-child),.input-group-btn:first-child>.btn-group:not(:first-child)>.btn{border-bottom-left-radius:0;border-top-left-radius:0}.input-group-addon:last-child{border-left:0}.input-group-btn{position:relative;font-size:0;white-space:nowrap}.input-group-btn>.btn{position:relative}.input-group-btn>.btn+.btn{margin-left:-1px}.input-group-btn>.btn:hover,.input-group-btn>.btn:focus,.input-group-btn>.btn:active{z-index:2}.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group{margin-right:-1px}.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group{z-index:2;margin-left:-1px}.nav{margin-bottom:0;padding-left:0;list-style:none}.nav>li{position:relative;display:block}.nav>li>a{position:relative;display:block;padding:10px 15px}.nav>li>a:hover,.nav>li>a:focus{text-decoration:none;background-color:#eeeeee}.nav>li.disabled>a{color:#999999}.nav>li.disabled>a:hover,.nav>li.disabled>a:focus{color:#999999;text-decoration:none;background-color:transparent;cursor:not-allowed}.nav .open>a,.nav .open>a:hover,.nav .open>a:focus{background-color:#eeeeee;border-color:#2fa4e7}.nav .nav-divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.nav>li>a>img{max-width:none}.nav-tabs{border-bottom:1px solid #dddddd}.nav-tabs>li{float:left;margin-bottom:-1px}.nav-tabs>li>a{margin-right:2px;line-height:1.42857143;border:1px solid transparent;border-radius:4px 4px 0 0}.nav-tabs>li>a:hover{border-color:#eeeeee #eeeeee #dddddd}.nav-tabs>li.active>a,.nav-tabs>li.active>a:hover,.nav-tabs>li.active>a:focus{color:#555555;background-color:#ffffff;border:1px solid #dddddd;border-bottom-color:transparent;cursor:default}.nav-tabs.nav-justified{width:100%;border-bottom:0}.nav-tabs.nav-justified>li{float:none}.nav-tabs.nav-justified>li>a{text-align:center;margin-bottom:5px}.nav-tabs.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}@media (min-width:768px){.nav-tabs.nav-justified>li{display:table-cell;width:1%}.nav-tabs.nav-justified>li>a{margin-bottom:0}}.nav-tabs.nav-justified>li>a{margin-right:0;border-radius:4px}.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:hover,.nav-tabs.nav-justified>.active>a:focus{border:1px solid #dddddd}@media (min-width:768px){.nav-tabs.nav-justified>li>a{border-bottom:1px solid #dddddd;border-radius:4px 4px 0 0}.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:hover,.nav-tabs.nav-justified>.active>a:focus{border-bottom-color:#ffffff}}.nav-pills>li{float:left}.nav-pills>li>a{border-radius:4px}.nav-pills>li+li{margin-left:2px}.nav-pills>li.active>a,.nav-pills>li.active>a:hover,.nav-pills>li.active>a:focus{color:#ffffff;background-color:#2fa4e7}.nav-stacked>li{float:none}.nav-stacked>li+li{margin-top:2px;margin-left:0}.nav-justified{width:100%}.nav-justified>li{float:none}.nav-justified>li>a{text-align:center;margin-bottom:5px}.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}@media (min-width:768px){.nav-justified>li{display:table-cell;width:1%}.nav-justified>li>a{margin-bottom:0}}.nav-tabs-justified{border-bottom:0}.nav-tabs-justified>li>a{margin-right:0;border-radius:4px}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:hover,.nav-tabs-justified>.active>a:focus{border:1px solid #dddddd}@media (min-width:768px){.nav-tabs-justified>li>a{border-bottom:1px solid #dddddd;border-radius:4px 4px 0 0}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:hover,.nav-tabs-justified>.active>a:focus{border-bottom-color:#ffffff}}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-right-radius:0;border-top-left-radius:0}.navbar{position:relative;min-height:50px;margin-bottom:20px;border:1px solid transparent}@media (min-width:768px){.navbar{border-radius:4px}}@media (min-width:768px){.navbar-header{float:left}}.navbar-collapse{overflow-x:visible;padding-right:15px;padding-left:15px;border-top:1px solid transparent;box-shadow:inset 0 1px 0 rgba(255,255,255,0.1);-webkit-overflow-scrolling:touch}.navbar-collapse.in{overflow-y:auto}@media (min-width:768px){.navbar-collapse{width:auto;border-top:0;box-shadow:none}.navbar-collapse.collapse{display:block !important;height:auto !important;padding-bottom:0;overflow:visible !important}.navbar-collapse.in{overflow-y:visible}.navbar-fixed-top .navbar-collapse,.navbar-static-top .navbar-collapse,.navbar-fixed-bottom .navbar-collapse{padding-left:0;padding-right:0}}.navbar-fixed-top .navbar-collapse,.navbar-fixed-bottom .navbar-collapse{max-height:340px}@media (max-device-width:480px) and (orientation:landscape){.navbar-fixed-top .navbar-collapse,.navbar-fixed-bottom .navbar-collapse{max-height:200px}}.container>.navbar-header,.container-fluid>.navbar-header,.container>.navbar-collapse,.container-fluid>.navbar-collapse{margin-right:-15px;margin-left:-15px}@media (min-width:768px){.container>.navbar-header,.container-fluid>.navbar-header,.container>.navbar-collapse,.container-fluid>.navbar-collapse{margin-right:0;margin-left:0}}.navbar-static-top{z-index:1000;border-width:0 0 1px}@media (min-width:768px){.navbar-static-top{border-radius:0}}.navbar-fixed-top,.navbar-fixed-bottom{position:fixed;right:0;left:0;z-index:1030}@media (min-width:768px){.navbar-fixed-top,.navbar-fixed-bottom{border-radius:0}}.navbar-fixed-top{top:0;border-width:0 0 1px}.navbar-fixed-bottom{bottom:0;margin-bottom:0;border-width:1px 0 0}.navbar-brand{float:left;padding:15px 15px;font-size:18px;line-height:20px;height:50px}.navbar-brand:hover,.navbar-brand:focus{text-decoration:none}.navbar-brand>img{display:block}@media (min-width:768px){.navbar>.container .navbar-brand,.navbar>.container-fluid .navbar-brand{margin-left:-15px}}.navbar-toggle{position:relative;float:right;margin-right:15px;padding:9px 10px;margin-top:8px;margin-bottom:8px;background-color:transparent;background-image:none;border:1px solid transparent;border-radius:4px}.navbar-toggle:focus{outline:0}.navbar-toggle .icon-bar{display:block;width:22px;height:2px;border-radius:1px}.navbar-toggle .icon-bar+.icon-bar{margin-top:4px}@media (min-width:768px){.navbar-toggle{display:none}}.navbar-nav{margin:7.5px -15px}.navbar-nav>li>a{padding-top:10px;padding-bottom:10px;line-height:20px}@media (max-width:767px){.navbar-nav .open .dropdown-menu{position:static;float:none;width:auto;margin-top:0;background-color:transparent;border:0;box-shadow:none}.navbar-nav .open .dropdown-menu>li>a,.navbar-nav .open .dropdown-menu .dropdown-header{padding:5px 15px 5px 25px}.navbar-nav .open .dropdown-menu>li>a{line-height:20px}.navbar-nav .open .dropdown-menu>li>a:hover,.navbar-nav .open .dropdown-menu>li>a:focus{background-image:none}}@media (min-width:768px){.navbar-nav{float:left;margin:0}.navbar-nav>li{float:left}.navbar-nav>li>a{padding-top:15px;padding-bottom:15px}}.navbar-form{margin-left:-15px;margin-right:-15px;padding:10px 15px;border-top:1px solid transparent;border-bottom:1px solid transparent;box-shadow:inset 0 1px 0 rgba(255,255,255,0.1),0 1px 0 rgba(255,255,255,0.1);margin-top:6px;margin-bottom:6px}@media (min-width:768px){.navbar-form .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.navbar-form .form-control{display:inline-block;width:auto;vertical-align:middle}.navbar-form .form-control-static{display:inline-block}.navbar-form .input-group{display:inline-table;vertical-align:middle}.navbar-form .input-group .input-group-addon,.navbar-form .input-group .input-group-btn,.navbar-form .input-group .form-control{width:auto}.navbar-form .input-group>.form-control{width:100%}.navbar-form .control-label{margin-bottom:0;vertical-align:middle}.navbar-form .radio,.navbar-form .checkbox{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.navbar-form .radio label,.navbar-form .checkbox label{padding-left:0}.navbar-form .radio input[type=\"radio\"],.navbar-form .checkbox input[type=\"checkbox\"]{position:relative;margin-left:0}.navbar-form .has-feedback .form-control-feedback{top:0}}@media (max-width:767px){.navbar-form .form-group{margin-bottom:5px}.navbar-form .form-group:last-child{margin-bottom:0}}@media (min-width:768px){.navbar-form{width:auto;border:0;margin-left:0;margin-right:0;padding-top:0;padding-bottom:0;box-shadow:none}}.navbar-nav>li>.dropdown-menu{margin-top:0;border-top-right-radius:0;border-top-left-radius:0}.navbar-fixed-bottom .navbar-nav>li>.dropdown-menu{margin-bottom:0;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.navbar-btn{margin-top:6px;margin-bottom:6px}.navbar-btn.btn-sm{margin-top:10px;margin-bottom:10px}.navbar-btn.btn-xs{margin-top:14px;margin-bottom:14px}.navbar-text{margin-top:15px;margin-bottom:15px}@media (min-width:768px){.navbar-text{float:left;margin-left:15px;margin-right:15px}}@media (min-width:768px){.navbar-left{float:left !important}.navbar-right{float:right !important;margin-right:-15px}.navbar-right~.navbar-right{margin-right:0}}.navbar-default{background-color:#2fa4e7;border-color:#1995dc}.navbar-default .navbar-brand{color:#ffffff}.navbar-default .navbar-brand:hover,.navbar-default .navbar-brand:focus{color:#ffffff;background-color:none}.navbar-default .navbar-text{color:#dddddd}.navbar-default .navbar-nav>li>a{color:#ffffff}.navbar-default .navbar-nav>li>a:hover,.navbar-default .navbar-nav>li>a:focus{color:#ffffff;background-color:#178acc}.navbar-default .navbar-nav>.active>a,.navbar-default .navbar-nav>.active>a:hover,.navbar-default .navbar-nav>.active>a:focus{color:#ffffff;background-color:#178acc}.navbar-default .navbar-nav>.disabled>a,.navbar-default .navbar-nav>.disabled>a:hover,.navbar-default .navbar-nav>.disabled>a:focus{color:#dddddd;background-color:transparent}.navbar-default .navbar-toggle{border-color:#178acc}.navbar-default .navbar-toggle:hover,.navbar-default .navbar-toggle:focus{background-color:#178acc}.navbar-default .navbar-toggle .icon-bar{background-color:#ffffff}.navbar-default .navbar-collapse,.navbar-default .navbar-form{border-color:#1995dc}.navbar-default .navbar-nav>.open>a,.navbar-default .navbar-nav>.open>a:hover,.navbar-default .navbar-nav>.open>a:focus{background-color:#178acc;color:#ffffff}@media (max-width:767px){.navbar-default .navbar-nav .open .dropdown-menu>li>a{color:#ffffff}.navbar-default .navbar-nav .open .dropdown-menu>li>a:hover,.navbar-default .navbar-nav .open .dropdown-menu>li>a:focus{color:#ffffff;background-color:#178acc}.navbar-default .navbar-nav .open .dropdown-menu>.active>a,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:hover,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:focus{color:#ffffff;background-color:#178acc}.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:hover,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:focus{color:#dddddd;background-color:transparent}}.navbar-default .navbar-link{color:#ffffff}.navbar-default .navbar-link:hover{color:#ffffff}.navbar-default .btn-link{color:#ffffff}.navbar-default .btn-link:hover,.navbar-default .btn-link:focus{color:#ffffff}.navbar-default .btn-link[disabled]:hover,fieldset[disabled] .navbar-default .btn-link:hover,.navbar-default .btn-link[disabled]:focus,fieldset[disabled] .navbar-default .btn-link:focus{color:#dddddd}.navbar-inverse{background-color:#033c73;border-color:#022f5a}.navbar-inverse .navbar-brand{color:#ffffff}.navbar-inverse .navbar-brand:hover,.navbar-inverse .navbar-brand:focus{color:#ffffff;background-color:none}.navbar-inverse .navbar-text{color:#ffffff}.navbar-inverse .navbar-nav>li>a{color:#ffffff}.navbar-inverse .navbar-nav>li>a:hover,.navbar-inverse .navbar-nav>li>a:focus{color:#ffffff;background-color:#022f5a}.navbar-inverse .navbar-nav>.active>a,.navbar-inverse .navbar-nav>.active>a:hover,.navbar-inverse .navbar-nav>.active>a:focus{color:#ffffff;background-color:#022f5a}.navbar-inverse .navbar-nav>.disabled>a,.navbar-inverse .navbar-nav>.disabled>a:hover,.navbar-inverse .navbar-nav>.disabled>a:focus{color:#cccccc;background-color:transparent}.navbar-inverse .navbar-toggle{border-color:#022f5a}.navbar-inverse .navbar-toggle:hover,.navbar-inverse .navbar-toggle:focus{background-color:#022f5a}.navbar-inverse .navbar-toggle .icon-bar{background-color:#ffffff}.navbar-inverse .navbar-collapse,.navbar-inverse .navbar-form{border-color:#022a50}.navbar-inverse .navbar-nav>.open>a,.navbar-inverse .navbar-nav>.open>a:hover,.navbar-inverse .navbar-nav>.open>a:focus{background-color:#022f5a;color:#ffffff}@media (max-width:767px){.navbar-inverse .navbar-nav .open .dropdown-menu>.dropdown-header{border-color:#022f5a}.navbar-inverse .navbar-nav .open .dropdown-menu .divider{background-color:#022f5a}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a{color:#ffffff}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:hover,.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:focus{color:#ffffff;background-color:#022f5a}.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:hover,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:focus{color:#ffffff;background-color:#022f5a}.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:hover,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:focus{color:#cccccc;background-color:transparent}}.navbar-inverse .navbar-link{color:#ffffff}.navbar-inverse .navbar-link:hover{color:#ffffff}.navbar-inverse .btn-link{color:#ffffff}.navbar-inverse .btn-link:hover,.navbar-inverse .btn-link:focus{color:#ffffff}.navbar-inverse .btn-link[disabled]:hover,fieldset[disabled] .navbar-inverse .btn-link:hover,.navbar-inverse .btn-link[disabled]:focus,fieldset[disabled] .navbar-inverse .btn-link:focus{color:#cccccc}.breadcrumb{padding:8px 15px;margin-bottom:20px;list-style:none;background-color:#f5f5f5;border-radius:4px}.breadcrumb>li{display:inline-block}.breadcrumb>li+li:before{content:\"/\\00a0\";padding:0 5px;color:#cccccc}.breadcrumb>.active{color:#999999}.pagination{display:inline-block;padding-left:0;margin:20px 0;border-radius:4px}.pagination>li{display:inline}.pagination>li>a,.pagination>li>span{position:relative;float:left;padding:8px 12px;line-height:1.42857143;text-decoration:none;color:#2fa4e7;background-color:#ffffff;border:1px solid #dddddd;margin-left:-1px}.pagination>li:first-child>a,.pagination>li:first-child>span{margin-left:0;border-bottom-left-radius:4px;border-top-left-radius:4px}.pagination>li:last-child>a,.pagination>li:last-child>span{border-bottom-right-radius:4px;border-top-right-radius:4px}.pagination>li>a:hover,.pagination>li>span:hover,.pagination>li>a:focus,.pagination>li>span:focus{z-index:2;color:#157ab5;background-color:#eeeeee;border-color:#dddddd}.pagination>.active>a,.pagination>.active>span,.pagination>.active>a:hover,.pagination>.active>span:hover,.pagination>.active>a:focus,.pagination>.active>span:focus{z-index:3;color:#999999;background-color:#f5f5f5;border-color:#dddddd;cursor:default}.pagination>.disabled>span,.pagination>.disabled>span:hover,.pagination>.disabled>span:focus,.pagination>.disabled>a,.pagination>.disabled>a:hover,.pagination>.disabled>a:focus{color:#999999;background-color:#ffffff;border-color:#dddddd;cursor:not-allowed}.pagination-lg>li>a,.pagination-lg>li>span{padding:14px 16px;font-size:18px;line-height:1.3333333}.pagination-lg>li:first-child>a,.pagination-lg>li:first-child>span{border-bottom-left-radius:6px;border-top-left-radius:6px}.pagination-lg>li:last-child>a,.pagination-lg>li:last-child>span{border-bottom-right-radius:6px;border-top-right-radius:6px}.pagination-sm>li>a,.pagination-sm>li>span{padding:5px 10px;font-size:12px;line-height:1.5}.pagination-sm>li:first-child>a,.pagination-sm>li:first-child>span{border-bottom-left-radius:3px;border-top-left-radius:3px}.pagination-sm>li:last-child>a,.pagination-sm>li:last-child>span{border-bottom-right-radius:3px;border-top-right-radius:3px}.pager{padding-left:0;margin:20px 0;list-style:none;text-align:center}.pager li{display:inline}.pager li>a,.pager li>span{display:inline-block;padding:5px 14px;background-color:#ffffff;border:1px solid #dddddd;border-radius:15px}.pager li>a:hover,.pager li>a:focus{text-decoration:none;background-color:#eeeeee}.pager .next>a,.pager .next>span{float:right}.pager .previous>a,.pager .previous>span{float:left}.pager .disabled>a,.pager .disabled>a:hover,.pager .disabled>a:focus,.pager .disabled>span{color:#999999;background-color:#ffffff;cursor:not-allowed}.label{display:inline;padding:.2em .6em .3em;font-size:75%;font-weight:bold;line-height:1;color:#ffffff;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25em}a.label:hover,a.label:focus{color:#ffffff;text-decoration:none;cursor:pointer}.label:empty{display:none}.btn .label{position:relative;top:-1px}.label-default{background-color:#999999}.label-default[href]:hover,.label-default[href]:focus{background-color:#808080}.label-primary{background-color:#2fa4e7}.label-primary[href]:hover,.label-primary[href]:focus{background-color:#178acc}.label-success{background-color:#73a839}.label-success[href]:hover,.label-success[href]:focus{background-color:#59822c}.label-info{background-color:#033c73}.label-info[href]:hover,.label-info[href]:focus{background-color:#022241}.label-warning{background-color:#dd5600}.label-warning[href]:hover,.label-warning[href]:focus{background-color:#aa4200}.label-danger{background-color:#c71c22}.label-danger[href]:hover,.label-danger[href]:focus{background-color:#9a161a}.badge{display:inline-block;min-width:10px;padding:3px 7px;font-size:12px;font-weight:bold;color:#ffffff;line-height:1;vertical-align:middle;white-space:nowrap;text-align:center;background-color:#2fa4e7;border-radius:10px}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.btn-xs .badge,.btn-group-xs>.btn .badge{top:0;padding:1px 5px}a.badge:hover,a.badge:focus{color:#ffffff;text-decoration:none;cursor:pointer}.list-group-item.active>.badge,.nav-pills>.active>a>.badge{color:#2fa4e7;background-color:#ffffff}.list-group-item>.badge{float:right}.list-group-item>.badge+.badge{margin-right:5px}.nav-pills>li>a>.badge{margin-left:3px}.jumbotron{padding-top:30px;padding-bottom:30px;margin-bottom:30px;color:inherit;background-color:#eeeeee}.jumbotron h1,.jumbotron .h1{color:inherit}.jumbotron p{margin-bottom:15px;font-size:21px;font-weight:200}.jumbotron>hr{border-top-color:#d5d5d5}.container .jumbotron,.container-fluid .jumbotron{border-radius:6px;padding-left:15px;padding-right:15px}.jumbotron .container{max-width:100%}@media screen and (min-width:768px){.jumbotron{padding-top:48px;padding-bottom:48px}.container .jumbotron,.container-fluid .jumbotron{padding-left:60px;padding-right:60px}.jumbotron h1,.jumbotron .h1{font-size:63px}}.thumbnail{display:block;padding:4px;margin-bottom:20px;line-height:1.42857143;background-color:#ffffff;border:1px solid #dddddd;border-radius:4px;-webkit-transition:border .2s ease-in-out;transition:border .2s ease-in-out}.thumbnail>img,.thumbnail a>img{margin-left:auto;margin-right:auto}a.thumbnail:hover,a.thumbnail:focus,a.thumbnail.active{border-color:#2fa4e7}.thumbnail .caption{padding:9px;color:#555555}.alert{padding:15px;margin-bottom:20px;border:1px solid transparent;border-radius:4px}.alert h4{margin-top:0;color:inherit}.alert .alert-link{font-weight:bold}.alert>p,.alert>ul{margin-bottom:0}.alert>p+p{margin-top:5px}.alert-dismissable,.alert-dismissible{padding-right:35px}.alert-dismissable .close,.alert-dismissible .close{position:relative;top:-2px;right:-21px;color:inherit}.alert-success{background-color:#dff0d8;border-color:#d6e9c6;color:#468847}.alert-success hr{border-top-color:#c9e2b3}.alert-success .alert-link{color:#356635}.alert-info{background-color:#d9edf7;border-color:#bce8f1;color:#3a87ad}.alert-info hr{border-top-color:#a6e1ec}.alert-info .alert-link{color:#2d6987}.alert-warning{background-color:#fcf8e3;border-color:#fbeed5;color:#c09853}.alert-warning hr{border-top-color:#f8e5be}.alert-warning .alert-link{color:#a47e3c}.alert-danger{background-color:#f2dede;border-color:#eed3d7;color:#b94a48}.alert-danger hr{border-top-color:#e6c1c7}.alert-danger .alert-link{color:#953b39}@-webkit-keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}.progress{overflow:hidden;height:20px;margin-bottom:20px;background-color:#f5f5f5;border-radius:4px;box-shadow:inset 0 1px 2px rgba(0,0,0,0.1)}.progress-bar{float:left;width:0%;height:100%;font-size:12px;line-height:20px;color:#ffffff;text-align:center;background-color:#2fa4e7;box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);-webkit-transition:width 0.6s ease;transition:width 0.6s ease}.progress-striped .progress-bar,.progress-bar-striped{background-image:-webkit-linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);background-image:linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);background-size:40px 40px}.progress.active .progress-bar,.progress-bar.active{-webkit-animation:progress-bar-stripes 2s linear infinite;animation:progress-bar-stripes 2s linear infinite}.progress-bar-success{background-color:#73a839}.progress-striped .progress-bar-success{background-image:-webkit-linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);background-image:linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)}.progress-bar-info{background-color:#033c73}.progress-striped .progress-bar-info{background-image:-webkit-linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);background-image:linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)}.progress-bar-warning{background-color:#dd5600}.progress-striped .progress-bar-warning{background-image:-webkit-linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);background-image:linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)}.progress-bar-danger{background-color:#c71c22}.progress-striped .progress-bar-danger{background-image:-webkit-linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);background-image:linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)}.media{margin-top:15px}.media:first-child{margin-top:0}.media,.media-body{zoom:1;overflow:hidden}.media-body{width:10000px}.media-object{display:block}.media-object.img-thumbnail{max-width:none}.media-right,.media>.pull-right{padding-left:10px}.media-left,.media>.pull-left{padding-right:10px}.media-left,.media-right,.media-body{display:table-cell;vertical-align:top}.media-middle{vertical-align:middle}.media-bottom{vertical-align:bottom}.media-heading{margin-top:0;margin-bottom:5px}.media-list{padding-left:0;list-style:none}.list-group{margin-bottom:20px;padding-left:0}.list-group-item{position:relative;display:block;padding:10px 15px;margin-bottom:-1px;background-color:#ffffff;border:1px solid #dddddd}.list-group-item:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:4px;border-bottom-left-radius:4px}a.list-group-item,button.list-group-item{color:#555555}a.list-group-item .list-group-item-heading,button.list-group-item .list-group-item-heading{color:#333333}a.list-group-item:hover,button.list-group-item:hover,a.list-group-item:focus,button.list-group-item:focus{text-decoration:none;color:#555555;background-color:#f5f5f5}button.list-group-item{width:100%;text-align:left}.list-group-item.disabled,.list-group-item.disabled:hover,.list-group-item.disabled:focus{background-color:#eeeeee;color:#999999;cursor:not-allowed}.list-group-item.disabled .list-group-item-heading,.list-group-item.disabled:hover .list-group-item-heading,.list-group-item.disabled:focus .list-group-item-heading{color:inherit}.list-group-item.disabled .list-group-item-text,.list-group-item.disabled:hover .list-group-item-text,.list-group-item.disabled:focus .list-group-item-text{color:#999999}.list-group-item.active,.list-group-item.active:hover,.list-group-item.active:focus{z-index:2;color:#ffffff;background-color:#2fa4e7;border-color:#2fa4e7}.list-group-item.active .list-group-item-heading,.list-group-item.active:hover .list-group-item-heading,.list-group-item.active:focus .list-group-item-heading,.list-group-item.active .list-group-item-heading>small,.list-group-item.active:hover .list-group-item-heading>small,.list-group-item.active:focus .list-group-item-heading>small,.list-group-item.active .list-group-item-heading>.small,.list-group-item.active:hover .list-group-item-heading>.small,.list-group-item.active:focus .list-group-item-heading>.small{color:inherit}.list-group-item.active .list-group-item-text,.list-group-item.active:hover .list-group-item-text,.list-group-item.active:focus .list-group-item-text{color:#e6f4fc}.list-group-item-success{color:#468847;background-color:#dff0d8}a.list-group-item-success,button.list-group-item-success{color:#468847}a.list-group-item-success .list-group-item-heading,button.list-group-item-success .list-group-item-heading{color:inherit}a.list-group-item-success:hover,button.list-group-item-success:hover,a.list-group-item-success:focus,button.list-group-item-success:focus{color:#468847;background-color:#d0e9c6}a.list-group-item-success.active,button.list-group-item-success.active,a.list-group-item-success.active:hover,button.list-group-item-success.active:hover,a.list-group-item-success.active:focus,button.list-group-item-success.active:focus{color:#fff;background-color:#468847;border-color:#468847}.list-group-item-info{color:#3a87ad;background-color:#d9edf7}a.list-group-item-info,button.list-group-item-info{color:#3a87ad}a.list-group-item-info .list-group-item-heading,button.list-group-item-info .list-group-item-heading{color:inherit}a.list-group-item-info:hover,button.list-group-item-info:hover,a.list-group-item-info:focus,button.list-group-item-info:focus{color:#3a87ad;background-color:#c4e3f3}a.list-group-item-info.active,button.list-group-item-info.active,a.list-group-item-info.active:hover,button.list-group-item-info.active:hover,a.list-group-item-info.active:focus,button.list-group-item-info.active:focus{color:#fff;background-color:#3a87ad;border-color:#3a87ad}.list-group-item-warning{color:#c09853;background-color:#fcf8e3}a.list-group-item-warning,button.list-group-item-warning{color:#c09853}a.list-group-item-warning .list-group-item-heading,button.list-group-item-warning .list-group-item-heading{color:inherit}a.list-group-item-warning:hover,button.list-group-item-warning:hover,a.list-group-item-warning:focus,button.list-group-item-warning:focus{color:#c09853;background-color:#faf2cc}a.list-group-item-warning.active,button.list-group-item-warning.active,a.list-group-item-warning.active:hover,button.list-group-item-warning.active:hover,a.list-group-item-warning.active:focus,button.list-group-item-warning.active:focus{color:#fff;background-color:#c09853;border-color:#c09853}.list-group-item-danger{color:#b94a48;background-color:#f2dede}a.list-group-item-danger,button.list-group-item-danger{color:#b94a48}a.list-group-item-danger .list-group-item-heading,button.list-group-item-danger .list-group-item-heading{color:inherit}a.list-group-item-danger:hover,button.list-group-item-danger:hover,a.list-group-item-danger:focus,button.list-group-item-danger:focus{color:#b94a48;background-color:#ebcccc}a.list-group-item-danger.active,button.list-group-item-danger.active,a.list-group-item-danger.active:hover,button.list-group-item-danger.active:hover,a.list-group-item-danger.active:focus,button.list-group-item-danger.active:focus{color:#fff;background-color:#b94a48;border-color:#b94a48}.list-group-item-heading{margin-top:0;margin-bottom:5px}.list-group-item-text{margin-bottom:0;line-height:1.3}.panel{margin-bottom:20px;background-color:#ffffff;border:1px solid transparent;border-radius:4px;box-shadow:0 1px 1px rgba(0,0,0,0.05)}.panel-body{padding:15px}.panel-heading{padding:10px 15px;border-bottom:1px solid transparent;border-top-right-radius:3px;border-top-left-radius:3px}.panel-heading>.dropdown .dropdown-toggle{color:inherit}.panel-title{margin-top:0;margin-bottom:0;font-size:16px;color:inherit}.panel-title>a,.panel-title>small,.panel-title>.small,.panel-title>small>a,.panel-title>.small>a{color:inherit}.panel-footer{padding:10px 15px;background-color:#f5f5f5;border-top:1px solid #dddddd;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.list-group,.panel>.panel-collapse>.list-group{margin-bottom:0}.panel>.list-group .list-group-item,.panel>.panel-collapse>.list-group .list-group-item{border-width:1px 0;border-radius:0}.panel>.list-group:first-child .list-group-item:first-child,.panel>.panel-collapse>.list-group:first-child .list-group-item:first-child{border-top:0;border-top-right-radius:3px;border-top-left-radius:3px}.panel>.list-group:last-child .list-group-item:last-child,.panel>.panel-collapse>.list-group:last-child .list-group-item:last-child{border-bottom:0;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.panel-heading+.panel-collapse>.list-group .list-group-item:first-child{border-top-right-radius:0;border-top-left-radius:0}.panel-heading+.list-group .list-group-item:first-child{border-top-width:0}.list-group+.panel-footer{border-top-width:0}.panel>.table,.panel>.table-responsive>.table,.panel>.panel-collapse>.table{margin-bottom:0}.panel>.table caption,.panel>.table-responsive>.table caption,.panel>.panel-collapse>.table caption{padding-left:15px;padding-right:15px}.panel>.table:first-child,.panel>.table-responsive:first-child>.table:first-child{border-top-right-radius:3px;border-top-left-radius:3px}.panel>.table:first-child>thead:first-child>tr:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child{border-top-left-radius:3px;border-top-right-radius:3px}.panel>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table:first-child>thead:first-child>tr:first-child th:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:first-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:first-child{border-top-left-radius:3px}.panel>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table:first-child>thead:first-child>tr:first-child th:last-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:last-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:last-child{border-top-right-radius:3px}.panel>.table:last-child,.panel>.table-responsive:last-child>.table:last-child{border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.table:last-child>tbody:last-child>tr:last-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child{border-bottom-left-radius:3px;border-bottom-right-radius:3px}.panel>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:first-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:first-child{border-bottom-left-radius:3px}.panel>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:last-child{border-bottom-right-radius:3px}.panel>.panel-body+.table,.panel>.panel-body+.table-responsive,.panel>.table+.panel-body,.panel>.table-responsive+.panel-body{border-top:1px solid #dddddd}.panel>.table>tbody:first-child>tr:first-child th,.panel>.table>tbody:first-child>tr:first-child td{border-top:0}.panel>.table-bordered,.panel>.table-responsive>.table-bordered{border:0}.panel>.table-bordered>thead>tr>th:first-child,.panel>.table-responsive>.table-bordered>thead>tr>th:first-child,.panel>.table-bordered>tbody>tr>th:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:first-child,.panel>.table-bordered>tfoot>tr>th:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:first-child,.panel>.table-bordered>thead>tr>td:first-child,.panel>.table-responsive>.table-bordered>thead>tr>td:first-child,.panel>.table-bordered>tbody>tr>td:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:first-child,.panel>.table-bordered>tfoot>tr>td:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:first-child{border-left:0}.panel>.table-bordered>thead>tr>th:last-child,.panel>.table-responsive>.table-bordered>thead>tr>th:last-child,.panel>.table-bordered>tbody>tr>th:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:last-child,.panel>.table-bordered>tfoot>tr>th:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:last-child,.panel>.table-bordered>thead>tr>td:last-child,.panel>.table-responsive>.table-bordered>thead>tr>td:last-child,.panel>.table-bordered>tbody>tr>td:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:last-child,.panel>.table-bordered>tfoot>tr>td:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:last-child{border-right:0}.panel>.table-bordered>thead>tr:first-child>td,.panel>.table-responsive>.table-bordered>thead>tr:first-child>td,.panel>.table-bordered>tbody>tr:first-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:first-child>td,.panel>.table-bordered>thead>tr:first-child>th,.panel>.table-responsive>.table-bordered>thead>tr:first-child>th,.panel>.table-bordered>tbody>tr:first-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:first-child>th{border-bottom:0}.panel>.table-bordered>tbody>tr:last-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>td,.panel>.table-bordered>tfoot>tr:last-child>td,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>td,.panel>.table-bordered>tbody>tr:last-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>th,.panel>.table-bordered>tfoot>tr:last-child>th,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>th{border-bottom:0}.panel>.table-responsive{border:0;margin-bottom:0}.panel-group{margin-bottom:20px}.panel-group .panel{margin-bottom:0;border-radius:4px}.panel-group .panel+.panel{margin-top:5px}.panel-group .panel-heading{border-bottom:0}.panel-group .panel-heading+.panel-collapse>.panel-body,.panel-group .panel-heading+.panel-collapse>.list-group{border-top:1px solid #dddddd}.panel-group .panel-footer{border-top:0}.panel-group .panel-footer+.panel-collapse .panel-body{border-bottom:1px solid #dddddd}.panel-default{border-color:#dddddd}.panel-default>.panel-heading{color:#555555;background-color:#f5f5f5;border-color:#dddddd}.panel-default>.panel-heading+.panel-collapse>.panel-body{border-top-color:#dddddd}.panel-default>.panel-heading .badge{color:#f5f5f5;background-color:#555555}.panel-default>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#dddddd}.panel-primary{border-color:#dddddd}.panel-primary>.panel-heading{color:#ffffff;background-color:#2fa4e7;border-color:#dddddd}.panel-primary>.panel-heading+.panel-collapse>.panel-body{border-top-color:#dddddd}.panel-primary>.panel-heading .badge{color:#2fa4e7;background-color:#ffffff}.panel-primary>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#dddddd}.panel-success{border-color:#dddddd}.panel-success>.panel-heading{color:#468847;background-color:#73a839;border-color:#dddddd}.panel-success>.panel-heading+.panel-collapse>.panel-body{border-top-color:#dddddd}.panel-success>.panel-heading .badge{color:#73a839;background-color:#468847}.panel-success>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#dddddd}.panel-info{border-color:#dddddd}.panel-info>.panel-heading{color:#3a87ad;background-color:#033c73;border-color:#dddddd}.panel-info>.panel-heading+.panel-collapse>.panel-body{border-top-color:#dddddd}.panel-info>.panel-heading .badge{color:#033c73;background-color:#3a87ad}.panel-info>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#dddddd}.panel-warning{border-color:#dddddd}.panel-warning>.panel-heading{color:#c09853;background-color:#dd5600;border-color:#dddddd}.panel-warning>.panel-heading+.panel-collapse>.panel-body{border-top-color:#dddddd}.panel-warning>.panel-heading .badge{color:#dd5600;background-color:#c09853}.panel-warning>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#dddddd}.panel-danger{border-color:#dddddd}.panel-danger>.panel-heading{color:#b94a48;background-color:#c71c22;border-color:#dddddd}.panel-danger>.panel-heading+.panel-collapse>.panel-body{border-top-color:#dddddd}.panel-danger>.panel-heading .badge{color:#c71c22;background-color:#b94a48}.panel-danger>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#dddddd}.embed-responsive{position:relative;display:block;height:0;padding:0;overflow:hidden}.embed-responsive .embed-responsive-item,.embed-responsive iframe,.embed-responsive embed,.embed-responsive object,.embed-responsive video{position:absolute;top:0;left:0;bottom:0;height:100%;width:100%;border:0}.embed-responsive-16by9{padding-bottom:56.25%}.embed-responsive-4by3{padding-bottom:75%}.well{min-height:20px;padding:19px;margin-bottom:20px;background-color:#f5f5f5;border:1px solid #e3e3e3;border-radius:4px;box-shadow:inset 0 1px 1px rgba(0,0,0,0.05)}.well blockquote{border-color:#ddd;border-color:rgba(0,0,0,0.15)}.well-lg{padding:24px;border-radius:6px}.well-sm{padding:9px;border-radius:3px}.close{float:right;font-size:21px;font-weight:bold;line-height:1;color:#000000;text-shadow:0 1px 0 #ffffff;opacity:0.2;filter:alpha(opacity=20)}.close:hover,.close:focus{color:#000000;text-decoration:none;cursor:pointer;opacity:0.5;filter:alpha(opacity=50)}button.close{padding:0;cursor:pointer;background:transparent;border:0;-webkit-appearance:none}.modal-open{overflow:hidden}.modal{display:none;overflow:hidden;position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;-webkit-overflow-scrolling:touch;outline:0}.modal.fade .modal-dialog{-webkit-transform:translate(0, -25%);transform:translate(0, -25%);-webkit-transition:-webkit-transform .3s ease-out;transition:-webkit-transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out, -webkit-transform .3s ease-out}.modal.in .modal-dialog{-webkit-transform:translate(0, 0);transform:translate(0, 0)}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal-dialog{position:relative;width:auto;margin:10px}.modal-content{position:relative;background-color:#ffffff;border:1px solid #999999;border:1px solid rgba(0,0,0,0.2);border-radius:6px;box-shadow:0 3px 9px rgba(0,0,0,0.5);background-clip:padding-box;outline:0}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000000}.modal-backdrop.fade{opacity:0;filter:alpha(opacity=0)}.modal-backdrop.in{opacity:0.5;filter:alpha(opacity=50)}.modal-header{padding:15px;border-bottom:1px solid #e5e5e5}.modal-header .close{margin-top:-2px}.modal-title{margin:0;line-height:1.42857143}.modal-body{position:relative;padding:20px}.modal-footer{padding:20px;text-align:right;border-top:1px solid #e5e5e5}.modal-footer .btn+.btn{margin-left:5px;margin-bottom:0}.modal-footer .btn-group .btn+.btn{margin-left:-1px}.modal-footer .btn-block+.btn-block{margin-left:0}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:768px){.modal-dialog{width:600px;margin:30px auto}.modal-content{box-shadow:0 5px 15px rgba(0,0,0,0.5)}.modal-sm{width:300px}}@media (min-width:992px){.modal-lg{width:900px}}.tooltip{position:absolute;z-index:1070;display:block;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-style:normal;font-weight:normal;letter-spacing:normal;line-break:auto;line-height:1.42857143;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;word-wrap:normal;font-size:12px;opacity:0;filter:alpha(opacity=0)}.tooltip.in{opacity:0.9;filter:alpha(opacity=90)}.tooltip.top{margin-top:-3px;padding:5px 0}.tooltip.right{margin-left:3px;padding:0 5px}.tooltip.bottom{margin-top:3px;padding:5px 0}.tooltip.left{margin-left:-3px;padding:0 5px}.tooltip-inner{max-width:200px;padding:3px 8px;color:#ffffff;text-align:center;background-color:#000000;border-radius:4px}.tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.tooltip.top .tooltip-arrow{bottom:0;left:50%;margin-left:-5px;border-width:5px 5px 0;border-top-color:#000000}.tooltip.top-left .tooltip-arrow{bottom:0;right:5px;margin-bottom:-5px;border-width:5px 5px 0;border-top-color:#000000}.tooltip.top-right .tooltip-arrow{bottom:0;left:5px;margin-bottom:-5px;border-width:5px 5px 0;border-top-color:#000000}.tooltip.right .tooltip-arrow{top:50%;left:0;margin-top:-5px;border-width:5px 5px 5px 0;border-right-color:#000000}.tooltip.left .tooltip-arrow{top:50%;right:0;margin-top:-5px;border-width:5px 0 5px 5px;border-left-color:#000000}.tooltip.bottom .tooltip-arrow{top:0;left:50%;margin-left:-5px;border-width:0 5px 5px;border-bottom-color:#000000}.tooltip.bottom-left .tooltip-arrow{top:0;right:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#000000}.tooltip.bottom-right .tooltip-arrow{top:0;left:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#000000}.popover{position:absolute;top:0;left:0;z-index:1060;display:none;max-width:276px;padding:1px;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-style:normal;font-weight:normal;letter-spacing:normal;line-break:auto;line-height:1.42857143;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;word-wrap:normal;font-size:14px;background-color:#ffffff;background-clip:padding-box;border:1px solid #cccccc;border:1px solid rgba(0,0,0,0.2);border-radius:6px;box-shadow:0 5px 10px rgba(0,0,0,0.2)}.popover.top{margin-top:-10px}.popover.right{margin-left:10px}.popover.bottom{margin-top:10px}.popover.left{margin-left:-10px}.popover-title{margin:0;padding:8px 14px;font-size:14px;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-radius:5px 5px 0 0}.popover-content{padding:9px 14px}.popover>.arrow,.popover>.arrow:after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.popover>.arrow{border-width:11px}.popover>.arrow:after{border-width:10px;content:\"\"}.popover.top>.arrow{left:50%;margin-left:-11px;border-bottom-width:0;border-top-color:#999999;border-top-color:rgba(0,0,0,0.25);bottom:-11px}.popover.top>.arrow:after{content:\" \";bottom:1px;margin-left:-10px;border-bottom-width:0;border-top-color:#ffffff}.popover.right>.arrow{top:50%;left:-11px;margin-top:-11px;border-left-width:0;border-right-color:#999999;border-right-color:rgba(0,0,0,0.25)}.popover.right>.arrow:after{content:\" \";left:1px;bottom:-10px;border-left-width:0;border-right-color:#ffffff}.popover.bottom>.arrow{left:50%;margin-left:-11px;border-top-width:0;border-bottom-color:#999999;border-bottom-color:rgba(0,0,0,0.25);top:-11px}.popover.bottom>.arrow:after{content:\" \";top:1px;margin-left:-10px;border-top-width:0;border-bottom-color:#ffffff}.popover.left>.arrow{top:50%;right:-11px;margin-top:-11px;border-right-width:0;border-left-color:#999999;border-left-color:rgba(0,0,0,0.25)}.popover.left>.arrow:after{content:\" \";right:1px;border-right-width:0;border-left-color:#ffffff;bottom:-10px}.carousel{position:relative}.carousel-inner{position:relative;overflow:hidden;width:100%}.carousel-inner>.item{display:none;position:relative;-webkit-transition:.6s ease-in-out left;transition:.6s ease-in-out left}.carousel-inner>.item>img,.carousel-inner>.item>a>img{line-height:1}@media all and (transform-3d),(-webkit-transform-3d){.carousel-inner>.item{-webkit-transition:-webkit-transform .6s ease-in-out;transition:-webkit-transform .6s ease-in-out;transition:transform .6s ease-in-out;transition:transform .6s ease-in-out, -webkit-transform .6s ease-in-out;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000px;perspective:1000px}.carousel-inner>.item.next,.carousel-inner>.item.active.right{-webkit-transform:translate3d(100%, 0, 0);transform:translate3d(100%, 0, 0);left:0}.carousel-inner>.item.prev,.carousel-inner>.item.active.left{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0);left:0}.carousel-inner>.item.next.left,.carousel-inner>.item.prev.right,.carousel-inner>.item.active{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);left:0}}.carousel-inner>.active,.carousel-inner>.next,.carousel-inner>.prev{display:block}.carousel-inner>.active{left:0}.carousel-inner>.next,.carousel-inner>.prev{position:absolute;top:0;width:100%}.carousel-inner>.next{left:100%}.carousel-inner>.prev{left:-100%}.carousel-inner>.next.left,.carousel-inner>.prev.right{left:0}.carousel-inner>.active.left{left:-100%}.carousel-inner>.active.right{left:100%}.carousel-control{position:absolute;top:0;left:0;bottom:0;width:15%;opacity:0.5;filter:alpha(opacity=50);font-size:20px;color:#ffffff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,0.6);background-color:rgba(0,0,0,0)}.carousel-control.left{background-image:-webkit-linear-gradient(left, rgba(0,0,0,0.5) 0, rgba(0,0,0,0.0001) 100%);background-image:-webkit-gradient(linear, left top, right top, from(rgba(0,0,0,0.5)), to(rgba(0,0,0,0.0001)));background-image:linear-gradient(to right, rgba(0,0,0,0.5) 0, rgba(0,0,0,0.0001) 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1)}.carousel-control.right{left:auto;right:0;background-image:-webkit-linear-gradient(left, rgba(0,0,0,0.0001) 0, rgba(0,0,0,0.5) 100%);background-image:-webkit-gradient(linear, left top, right top, from(rgba(0,0,0,0.0001)), to(rgba(0,0,0,0.5)));background-image:linear-gradient(to right, rgba(0,0,0,0.0001) 0, rgba(0,0,0,0.5) 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1)}.carousel-control:hover,.carousel-control:focus{outline:0;color:#ffffff;text-decoration:none;opacity:0.9;filter:alpha(opacity=90)}.carousel-control .icon-prev,.carousel-control .icon-next,.carousel-control .glyphicon-chevron-left,.carousel-control .glyphicon-chevron-right{position:absolute;top:50%;margin-top:-10px;z-index:5;display:inline-block}.carousel-control .icon-prev,.carousel-control .glyphicon-chevron-left{left:50%;margin-left:-10px}.carousel-control .icon-next,.carousel-control .glyphicon-chevron-right{right:50%;margin-right:-10px}.carousel-control .icon-prev,.carousel-control .icon-next{width:20px;height:20px;line-height:1;font-family:serif}.carousel-control .icon-prev:before{content:'\\2039'}.carousel-control .icon-next:before{content:'\\203a'}.carousel-indicators{position:absolute;bottom:10px;left:50%;z-index:15;width:60%;margin-left:-30%;padding-left:0;list-style:none;text-align:center}.carousel-indicators li{display:inline-block;width:10px;height:10px;margin:1px;text-indent:-999px;border:1px solid #ffffff;border-radius:10px;cursor:pointer;background-color:#000 \\9;background-color:rgba(0,0,0,0)}.carousel-indicators .active{margin:0;width:12px;height:12px;background-color:#ffffff}.carousel-caption{position:absolute;left:15%;right:15%;bottom:20px;z-index:10;padding-top:20px;padding-bottom:20px;color:#ffffff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,0.6)}.carousel-caption .btn{text-shadow:none}@media screen and (min-width:768px){.carousel-control .glyphicon-chevron-left,.carousel-control .glyphicon-chevron-right,.carousel-control .icon-prev,.carousel-control .icon-next{width:30px;height:30px;margin-top:-10px;font-size:30px}.carousel-control .glyphicon-chevron-left,.carousel-control .icon-prev{margin-left:-10px}.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next{margin-right:-10px}.carousel-caption{left:20%;right:20%;padding-bottom:30px}.carousel-indicators{bottom:20px}}.clearfix:before,.clearfix:after,.dl-horizontal dd:before,.dl-horizontal dd:after,.container:before,.container:after,.container-fluid:before,.container-fluid:after,.row:before,.row:after,.form-horizontal .form-group:before,.form-horizontal .form-group:after,.btn-toolbar:before,.btn-toolbar:after,.btn-group-vertical>.btn-group:before,.btn-group-vertical>.btn-group:after,.nav:before,.nav:after,.navbar:before,.navbar:after,.navbar-header:before,.navbar-header:after,.navbar-collapse:before,.navbar-collapse:after,.pager:before,.pager:after,.panel-body:before,.panel-body:after,.modal-header:before,.modal-header:after,.modal-footer:before,.modal-footer:after{content:\" \";display:table}.clearfix:after,.dl-horizontal dd:after,.container:after,.container-fluid:after,.row:after,.form-horizontal .form-group:after,.btn-toolbar:after,.btn-group-vertical>.btn-group:after,.nav:after,.navbar:after,.navbar-header:after,.navbar-collapse:after,.pager:after,.panel-body:after,.modal-header:after,.modal-footer:after{clear:both}.center-block{display:block;margin-left:auto;margin-right:auto}.pull-right{float:right !important}.pull-left{float:left !important}.hide{display:none !important}.show{display:block !important}.invisible{visibility:hidden}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.hidden{display:none !important}.affix{position:fixed}@-ms-viewport{width:device-width}.visible-xs,.visible-sm,.visible-md,.visible-lg{display:none !important}.visible-xs-block,.visible-xs-inline,.visible-xs-inline-block,.visible-sm-block,.visible-sm-inline,.visible-sm-inline-block,.visible-md-block,.visible-md-inline,.visible-md-inline-block,.visible-lg-block,.visible-lg-inline,.visible-lg-inline-block{display:none !important}@media (max-width:767px){.visible-xs{display:block !important}table.visible-xs{display:table !important}tr.visible-xs{display:table-row !important}th.visible-xs,td.visible-xs{display:table-cell !important}}@media (max-width:767px){.visible-xs-block{display:block !important}}@media (max-width:767px){.visible-xs-inline{display:inline !important}}@media (max-width:767px){.visible-xs-inline-block{display:inline-block !important}}@media (min-width:768px) and (max-width:991px){.visible-sm{display:block !important}table.visible-sm{display:table !important}tr.visible-sm{display:table-row !important}th.visible-sm,td.visible-sm{display:table-cell !important}}@media (min-width:768px) and (max-width:991px){.visible-sm-block{display:block !important}}@media (min-width:768px) and (max-width:991px){.visible-sm-inline{display:inline !important}}@media (min-width:768px) and (max-width:991px){.visible-sm-inline-block{display:inline-block !important}}@media (min-width:992px) and (max-width:1199px){.visible-md{display:block !important}table.visible-md{display:table !important}tr.visible-md{display:table-row !important}th.visible-md,td.visible-md{display:table-cell !important}}@media (min-width:992px) and (max-width:1199px){.visible-md-block{display:block !important}}@media (min-width:992px) and (max-width:1199px){.visible-md-inline{display:inline !important}}@media (min-width:992px) and (max-width:1199px){.visible-md-inline-block{display:inline-block !important}}@media (min-width:1200px){.visible-lg{display:block !important}table.visible-lg{display:table !important}tr.visible-lg{display:table-row !important}th.visible-lg,td.visible-lg{display:table-cell !important}}@media (min-width:1200px){.visible-lg-block{display:block !important}}@media (min-width:1200px){.visible-lg-inline{display:inline !important}}@media (min-width:1200px){.visible-lg-inline-block{display:inline-block !important}}@media (max-width:767px){.hidden-xs{display:none !important}}@media (min-width:768px) and (max-width:991px){.hidden-sm{display:none !important}}@media (min-width:992px) and (max-width:1199px){.hidden-md{display:none !important}}@media (min-width:1200px){.hidden-lg{display:none !important}}.visible-print{display:none !important}@media print{.visible-print{display:block !important}table.visible-print{display:table !important}tr.visible-print{display:table-row !important}th.visible-print,td.visible-print{display:table-cell !important}}.visible-print-block{display:none !important}@media print{.visible-print-block{display:block !important}}.visible-print-inline{display:none !important}@media print{.visible-print-inline{display:inline !important}}.visible-print-inline-block{display:none !important}@media print{.visible-print-inline-block{display:inline-block !important}}@media print{.hidden-print{display:none !important}}.navbar-default{background-image:-webkit-linear-gradient(#54b4eb, #2fa4e7 60%, #1d9ce5);background-image:-webkit-gradient(linear, left top, left bottom, from(#54b4eb), color-stop(60%, #2fa4e7), to(#1d9ce5));background-image:linear-gradient(#54b4eb, #2fa4e7 60%, #1d9ce5);background-repeat:no-repeat;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff54b4eb', endColorstr='#ff1d9ce5', GradientType=0);border-bottom:1px solid #178acc;-webkit-filter:none;filter:none;box-shadow:0 1px 10px rgba(0,0,0,0.1)}.navbar-default .badge{background-color:#fff;color:#2fa4e7}.navbar-inverse{background-image:-webkit-linear-gradient(#04519b, #044687 60%, #033769);background-image:-webkit-gradient(linear, left top, left bottom, from(#04519b), color-stop(60%, #044687), to(#033769));background-image:linear-gradient(#04519b, #044687 60%, #033769);background-repeat:no-repeat;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff04519b', endColorstr='#ff033769', GradientType=0);-webkit-filter:none;filter:none;border-bottom:1px solid #022241}.navbar-inverse .badge{background-color:#fff;color:#033c73}.navbar .navbar-nav>li>a,.navbar-brand{text-shadow:0 1px 0 rgba(0,0,0,0.1)}@media (max-width:767px){.navbar .dropdown-header{color:#fff}.navbar .dropdown-menu a{color:#fff}}.btn{text-shadow:0 1px 0 rgba(0,0,0,0.1)}.btn .caret{border-top-color:#fff}.btn-default{background-image:-webkit-linear-gradient(#fff, #fff 60%, #f5f5f5);background-image:-webkit-gradient(linear, left top, left bottom, from(#fff), color-stop(60%, #fff), to(#f5f5f5));background-image:linear-gradient(#fff, #fff 60%, #f5f5f5);background-repeat:no-repeat;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#fff5f5f5', GradientType=0);-webkit-filter:none;filter:none;border-bottom:1px solid #e6e6e6}.btn-default:hover{color:#555555}.btn-default .caret{border-top-color:#555555}.btn-default{background-image:-webkit-linear-gradient(#fff, #fff 60%, #f5f5f5);background-image:-webkit-gradient(linear, left top, left bottom, from(#fff), color-stop(60%, #fff), to(#f5f5f5));background-image:linear-gradient(#fff, #fff 60%, #f5f5f5);background-repeat:no-repeat;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#fff5f5f5', GradientType=0);-webkit-filter:none;filter:none;border-bottom:1px solid #e6e6e6}.btn-primary{background-image:-webkit-linear-gradient(#54b4eb, #2fa4e7 60%, #1d9ce5);background-image:-webkit-gradient(linear, left top, left bottom, from(#54b4eb), color-stop(60%, #2fa4e7), to(#1d9ce5));background-image:linear-gradient(#54b4eb, #2fa4e7 60%, #1d9ce5);background-repeat:no-repeat;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff54b4eb', endColorstr='#ff1d9ce5', GradientType=0);-webkit-filter:none;filter:none;border-bottom:1px solid #178acc}.btn-success{background-image:-webkit-linear-gradient(#88c149, #73a839 60%, #699934);background-image:-webkit-gradient(linear, left top, left bottom, from(#88c149), color-stop(60%, #73a839), to(#699934));background-image:linear-gradient(#88c149, #73a839 60%, #699934);background-repeat:no-repeat;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff88c149', endColorstr='#ff699934', GradientType=0);-webkit-filter:none;filter:none;border-bottom:1px solid #59822c}.btn-info{background-image:-webkit-linear-gradient(#04519b, #033c73 60%, #02325f);background-image:-webkit-gradient(linear, left top, left bottom, from(#04519b), color-stop(60%, #033c73), to(#02325f));background-image:linear-gradient(#04519b, #033c73 60%, #02325f);background-repeat:no-repeat;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff04519b', endColorstr='#ff02325f', GradientType=0);-webkit-filter:none;filter:none;border-bottom:1px solid #022241}.btn-warning{background-image:-webkit-linear-gradient(#ff6707, #dd5600 60%, #c94e00);background-image:-webkit-gradient(linear, left top, left bottom, from(#ff6707), color-stop(60%, #dd5600), to(#c94e00));background-image:linear-gradient(#ff6707, #dd5600 60%, #c94e00);background-repeat:no-repeat;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffff6707', endColorstr='#ffc94e00', GradientType=0);-webkit-filter:none;filter:none;border-bottom:1px solid #aa4200}.btn-danger{background-image:-webkit-linear-gradient(#e12b31, #c71c22 60%, #b5191f);background-image:-webkit-gradient(linear, left top, left bottom, from(#e12b31), color-stop(60%, #c71c22), to(#b5191f));background-image:linear-gradient(#e12b31, #c71c22 60%, #b5191f);background-repeat:no-repeat;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffe12b31', endColorstr='#ffb5191f', GradientType=0);-webkit-filter:none;filter:none;border-bottom:1px solid #9a161a}.panel-primary .panel-heading,.panel-success .panel-heading,.panel-warning .panel-heading,.panel-danger .panel-heading,.panel-info .panel-heading,.panel-primary .panel-title,.panel-success .panel-title,.panel-warning .panel-title,.panel-danger .panel-title,.panel-info .panel-title{color:#fff}\r\n"

/***/ }),

/***/ 869:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3 col-md-offset-1\">\r\n        <md-grid-list cols=\"1\" rowHeight=\"70px\">\r\n          <md-grid-tile>\r\n            <span id=\"title\">Todo list by pasha</span>\r\n          </md-grid-tile>\r\n        </md-grid-list>\r\n      </div>\r\n      <div class=\"col-md-3 col-md-offset-0\">\r\n      </div>\r\n      <div class=\"col-md-3 col-md-offset-0\">\r\n        <md-grid-list cols=\"1\" rowHeight=\"70px\">\r\n          <md-grid-tile>\r\n            <button (click)=\"openDialogAddTask()\">\r\n                <span mdTooltip=\"Add Task\">\r\n                  <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n                </span>\r\n            </button>\r\n          </md-grid-tile>\r\n        </md-grid-list>\r\n      </div>\r\n    </div>\r\n  </div><!-- /.container-fluid -->\r\n</nav>\r\n"

/***/ }),

/***/ 870:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"addTaskText text-center\">\r\n  Adding the Task\r\n</div>\r\n<div class=\"closeBut\">\r\n  <button md-button md-dialog-close type=\"button\" class=\"btn btn-danger\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n  </button>\r\n</div>\r\n\r\n<div>\r\n  <md-input-container class=\"taskContainer\">\r\n    <input id=\"focus\" class=\"taskText\" md-input color=\"primar\" placeholder=\"Task name\" #name>\r\n  </md-input-container>\r\n</div>\r\n\r\n<div class=\"dateContainer left\" >\r\n  <form #myForm=\"ngForm\" novalidate>\r\n  <my-date-picker name=\"mydate\" [options]=\"myDatePickerOptions\"\r\n                  [(ngModel)]=\"date\" required></my-date-picker>\r\n</form>\r\n</div>\r\n\r\n<div class=\"priorityContainer\" >\r\n<md-select placeholder=\"Select priority\" [(ngModel)]=\"selectedPriority\" >\r\n  <md-option *ngFor=\"let priority of priorities\" [value]=\"priority.value\" >\r\n    <i class=\"fa fa-flag\" [style.color]=\"priority.color\" aria-hidden=\"true\" ></i>\r\n    <span class=\"priorityName\">{{priority.name}}</span>\r\n  </md-option>\r\n</md-select>\r\n</div>\r\n<br>\r\n\r\n<button md-dialog-close (click)=\"addTask(name.value)\" type=\"button\" class=\"btn btn-primary\">Add Task\r\n</button>\r\n\r\n<!--TODO add focus on input,not exit button-->\r\n"

/***/ }),

/***/ 871:
/***/ (function(module, exports) {

module.exports = "<form>\r\n  <div class=\"form-group\">\r\n    <label for=\"exampleInputEmail1\">Email address</label>\r\n    <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Email\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"exampleInputPassword1\">Password</label>\r\n    <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"exampleInputFile\">File input</label>\r\n    <input type=\"file\" id=\"exampleInputFile\">\r\n    <p class=\"help-block\">Example block-level help text here.</p>\r\n  </div>\r\n  <div class=\"checkbox\">\r\n    <label>\r\n      <input type=\"checkbox\"> Check me out\r\n    </label>\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n</form>\r\n"

/***/ }),

/***/ 872:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<app-tasks></app-tasks>\r\n"

/***/ }),

/***/ 873:
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let taskByDateMeta of tasksByDate\">\r\n  <task-by-date [title]=\"taskByDateMeta.title\" [startDate]=\"taskByDateMeta.startDate\" [endDate]=\"taskByDateMeta.endDate\"></task-by-date>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 874:
/***/ (function(module, exports) {

module.exports = "<span *ngIf=\"tasks.length!=0\">\r\n  <div id=\"titleHeader\"><h2 class=\"text-center\" id=\"titleText\">{{title}}</h2></div>\r\n  <app-task *ngFor=\"let task of tasks\" [task]=\"task\"></app-task>\r\n</span>\r\n"

/***/ }),

/***/ 875:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2\">\r\n      <span class=\"completeStatusButton\">\r\n        <span id=\"complete\" *ngIf=\"task.isDone\">\r\n          <a id=\"doneIcon\" (click)=\"undoComplleteTask()\"><i class=\"fa fa-chevron-down fa-2x\" aria-hidden=\"true\"></i></a>\r\n        </span>\r\n        <span id=\"notcomplete\" *ngIf=\"!task.isDone\">\r\n          <a id=\"undoneIcon\" (click)=\"completeTask()\"><i class=\"fa fa-circle-o fa-2x\" aria-hidden=\"true\"></i></a>\r\n        </span>\r\n      </span>\r\n      <span class=\"priority\">\r\n        <i class=\"fa fa-flag fa-2x\" [style.color]=\"getPriorityColor()\" aria-hidden=\"true\"></i>\r\n      </span>\r\n    </div>\r\n    <div class=\"col-md-4 \">\r\n      <span>\r\n        <md-input-container>\r\n          <input id=\"focus\" class=\"taskText\" md-input color=\"primar\" value=\"{{task.title}}\"\r\n                 (blur)=\"updateText(taskTitle)\" #taskTitle>\r\n        </md-input-container>\r\n      </span>\r\n    </div>\r\n    <div class=\"col-md-3 \">\r\n      <span class=\"date\">{{task.date.format('Do MMMM YYYY')}}</span>\r\n    </div>\r\n    <div class=\"col-md-2 col-md-offset-1 buttons\">\r\n      <!--buttons-->\r\n      <span class=\"edit-button\">\r\n            <changeDropDownMenu (editTaskText)=\"focusOnEditTaskArea(taskTitle)\" [task]=\"task\"></changeDropDownMenu>\r\n        </span>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 876:
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\" dropdown [dropdownToggle]=\"false\" [dropdown-not-closable-zone]=\"true\">\r\n  <i class=\"fa fa-list-ul fa-2x\" aria-hidden=\"true\" dropdown-open></i>\r\n\r\n<ul class=\"dropdown-menu\" >\r\n  <li><a (click)=\"editTaskTitle()\">Edit Text</a></li>\r\n  <li role=\"separator\" class=\"divider\"></li>\r\n  <li class=\"shadowText\">Shedule</li>\r\n  <li>\r\n    <div class=\"container tabs\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\"><a mdTooltip=\"Tomorrow\" (click)=\"postponeOneDay()\"><i class=\"fa fa-undo  fa-2x\" aria-hidden=\"true\"></i></a></div>\r\n        <div class=\"col-md-4\"><a mdTooltip=\"Next Week\" (click)=\"postponeOneWeek()\"><i class=\"fa fa-arrow-circle-o-right  fa-2x\"\r\n                                                          aria-hidden=\"true\"></i></a></div>\r\n        <div class=\"col-md-4\" >\r\n\r\n          <!--Here i use https://github.com/pleerock/ng2-dropdown  -->\r\n          <div class=\"dropdown\" dropdown [dropdownToggle]=\"true\" [dropdown-not-closable-zone]=\"true\">\r\n            <a class=\"postponeDateTooltip\" mdTooltip=\"Pick Date\">\r\n              <i class=\"fa fa-calendar  fa-2x\" aria-hidden=\"true\" dropdown-open ></i>\r\n            </a>\r\n            <ul class=\"dropdown-menu\">\r\n                <my-date-picker name=\"mydate\" [options]=\"postponeDatePickerOptions\"\r\n                                [(ngModel)]=\"postponeDate\"\r\n                                (dateChanged)=\"onPostponeCalendarDateChanged($event)\"></my-date-picker>\r\n            </ul>\r\n          </div>\r\n          <!-- -------------  -->\r\n\r\n        </div>\r\n        <div class=\"col-md-4\"></div>\r\n      </div>\r\n    </div>\r\n  </li>\r\n  <li role=\"separator\" class=\"divider\"></li>\r\n  <li class=\"shadowText\">Priority</li>\r\n  <div class=\"container tabs\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\"><a mdTooltip=\"Priority 1\"  class=\"red\" ><i  (click)=\"setPriority($event)\"id=\"priority1\" class=\"fa fa-flag fa-2x\" aria-hidden=\"true\"></i>\r\n      </a></div>\r\n      <div class=\"col-md-3\"><a mdTooltip=\"Priority 2\"  class=\"orange\" (click)=\"setPriority($event)\"><i id=\"priority2\" class=\"fa fa-flag fa-2x\" aria-hidden=\"true\"></i>\r\n      </a></div>\r\n      <div class=\"col-md-3\"><a mdTooltip=\"Priority 3\"  class=\"green\" (click)=\"setPriority($event)\"><i id=\"priority3\" class=\"fa fa-flag fa-2x\" aria-hidden=\"true\"></i>\r\n      </a></div>\r\n      <div class=\"col-md-3\"><a mdTooltip=\"Priority 4\"  class=\"gray\" (click)=\"setPriority($event)\"><i id=\"priority4\" class=\"fa fa-flag fa-2x\"\r\n                                                                      aria-hidden=\"true\"></i></a></div>\r\n    </div>\r\n  </div>\r\n  <li role=\"separator\" class=\"divider\"></li>\r\n  <li id=\"redLi\"><a class=\"redText\" (click)=\"deleteTask($event)\">Delete this Task</a></li>\r\n  <li role=\"separator\" class=\"divider\"></li>\r\n</ul>\r\n</div>\r\n\r\n\r\n"

/***/ })

},[1139]);
//# sourceMappingURL=main.bundle.map