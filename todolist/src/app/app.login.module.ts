import { NgModule } from '@angular/core';

import {LoginComponent} from './components/login-component/app.loginComponent';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [LoginComponent],
  declarations: [LoginComponent],
  providers: [],
  bootstrap: [LoginComponent]
})
export class LoginModule {
}

