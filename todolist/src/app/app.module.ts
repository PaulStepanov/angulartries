import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './components/main-component/app.root.rootcomponent';
import {MaterialModule, MdInputModule} from '@angular/material';
import 'hammerjs';
import {HeaderComponent} from "./components/header-component/app.header";
import {AppTasksComponent} from "./components/task-component/tasks/app.tasks";
import {TaskComponent} from "./components/task-component/tasks/task/app.task";
import {AddTaskDialog} from "./components/header-component/taskdialog/taskDialog";
import {TaskManagerService} from "./servicies/TaskManagerService";
import {MyDatePickerModule} from "mydatepicker";
import {TasksServerCommunicator} from "./servicies/TasksServerComunicator";
import {
  ChangeDropDownMenu
} from "./components/task-component/tasks/task/changeButton/changeButton.component";
import {DropdownModule} from "ngx-dropdown";
import {TaskByDate} from "./components/task-component/tasks/taskByDate/taskByDate";
import {store} from "./store/Store";
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import {AppState} from "./store/AppState";
import {ActionCreatorService} from "./servicies/ActionCreatorService";
import {LoginComponent} from "./components/header-component/login-component/app.login";
import {LoginService} from "./servicies/LoginService";
import {LoginDialog} from "./components/header-component/login-component/login-window-dialog/LoginDialog";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppTasksComponent,
    TaskComponent,
    AddTaskDialog,
    ChangeDropDownMenu,
    TaskByDate,
    LoginComponent,
    LoginDialog
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    MdInputModule,
    MyDatePickerModule,
    DropdownModule,
    NgReduxModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddTaskDialog,LoginDialog],
  providers: [TaskManagerService,TasksServerCommunicator,ActionCreatorService,LoginService]
})


export class AppModule {
  constructor(ngRedux: NgRedux<AppState>) {
    ngRedux.provideStore(store);
  }
}
