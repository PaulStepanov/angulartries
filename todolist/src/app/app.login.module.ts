import { NgModule } from '@angular/core';

import {LoginComponent} from './components/login-component/app.loginComponent';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [LoginComponent],
  declarations: [LoginComponent],
  providers: [],
  bootstrap: [LoginComponent]
})
export class LoginModule {
}

