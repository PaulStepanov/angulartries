import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './components/main-component/app.root.rootcomponent';
import {LoginModule} from "./app.login.module";
import {MaterialModule, MdInputModule} from '@angular/material';
import 'hammerjs';
import {HeaderComponent} from "./components/header-component/app.header";
import {AppTasksComponent} from "./components/task-component/tasks/app.tasks";
import {TaskComponent} from "./components/task-component/tasks/task/app.task";
import {AddTaskDialog} from "./components/header-component/taskdialog/taskDialog";
import {TaskManagerService} from "./components/servicies/TaskManagerService";
import {MyDatePickerModule} from "mydatepicker";
import {TasksStore} from "./components/servicies/TasksServerComunicator";
import {TasksSorter} from "./components/servicies/TasksSorter";
import {
  ChangeDropDownMenu
} from "./components/task-component/tasks/task/changeButton/changeButton.component";
import {DropdownModule} from "ngx-dropdown";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppTasksComponent,
    TaskComponent,
    AddTaskDialog,
    ChangeDropDownMenu
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginModule,
    MaterialModule.forRoot(),
    MdInputModule,
    MyDatePickerModule,
    DropdownModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddTaskDialog],
  providers: [TaskManagerService,TasksStore,TasksSorter]
})
export class AppModule {
}
