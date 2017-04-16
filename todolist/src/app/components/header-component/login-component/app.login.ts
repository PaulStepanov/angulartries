import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../../servicies/LoginService";
import {MdDialog} from "@angular/material";
import {LoginDialog} from "./login-window-dialog/LoginDialog";

/**
 * Login button component, when clicked open a dialogue  to login
 * */
@Component({
  moduleId: module.id,
  selector: 'app-login-button',
  templateUrl: 'app.login.html',
  styleUrls: ['app.login.css']
})

export class LoginComponent implements OnInit {
  private userName:string;
  private isLogged:boolean = false;

  constructor(private loginService:LoginService,
              public dialog: MdDialog) {
  }

  ngOnInit() {
  }

  openLoginDialogue(){
    this.dialog.open(LoginDialog,{width:'40%',height:'40%'})
  }

  logout(){
    this.loginService.logout();
  }
}
