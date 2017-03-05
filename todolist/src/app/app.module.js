"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var app_root_rootcomponent_1 = require('./components/main-component/app.root.rootcomponent');
var app_login_module_1 = require("./app.login.module");
var material_1 = require('@angular/material');
require('hammerjs');
var app_header_1 = require("./components/header-component/app.header");
var app_tasks_1 = require("./components/task-component/tasks/app.tasks");
var app_task_1 = require("./components/task-component/tasks/task/app.task");
var taskDialog_1 = require("./components/header-component/taskdialog/taskDialog");
var TaskManagerService_1 = require("./components/servicies/TaskManagerService");
var mydatepicker_1 = require("mydatepicker");
var TasksServerComunicator_1 = require("./components/servicies/TasksServerComunicator");
var TasksSorter_1 = require("./components/servicies/TasksSorter");
var changeButton_component_1 = require("./components/task-component/tasks/task/changeButton/changeButton.component");
var ngx_dropdown_1 = require("ngx-dropdown");
var taskByDate_1 = require("./components/task-component/tasks/taskByDate/taskByDate");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_root_rootcomponent_1.AppComponent,
                app_header_1.HeaderComponent,
                app_tasks_1.AppTasksComponent,
                app_task_1.TaskComponent,
                taskDialog_1.AddTaskDialog,
                changeButton_component_1.ChangeDropDownMenu
            ],
            imports: [
                ng_bootstrap_1.NgbModule.forRoot(),
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_login_module_1.LoginModule,
                material_1.MaterialModule.forRoot(),
                material_1.MdInputModule,
                mydatepicker_1.MyDatePickerModule,
                ngx_dropdown_1.DropdownModule,
                taskByDate_1.TaskByDate
            ],
            bootstrap: [app_root_rootcomponent_1.AppComponent],
            entryComponents: [taskDialog_1.AddTaskDialog],
            providers: [TaskManagerService_1.TaskManagerService, TasksServerComunicator_1.TasksServerComunicator, TasksSorter_1.TasksSorter]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
