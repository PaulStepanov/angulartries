import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './components/app.root.rootcomponent';
import {LoginModule} from "./app.login.module";
import { MaterialModule,MdInputModule } from '@angular/material';
import 'hammerjs';
import {HeaderComponent} from "./components/app.header";
import {AppTasksComponent} from "./components/tasks/app.tasks";
import {TaskComponent} from "./components/tasks/app.task";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppTasksComponent,
    TaskComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginModule,
    MaterialModule.forRoot(),
    MdInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
