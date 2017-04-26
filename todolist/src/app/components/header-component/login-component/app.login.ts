import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../../servicies/LoginService";
import {MdDialog} from "@angular/material";
import {LoginDialog} from "./login-window-dialog/LoginDialog";
import {NgRedux, select} from "@angular-redux/store";
import {ActionCreatorService} from "../../../servicies/ActionCreatorService";
import {AppState} from "../../../store/AppState";
import {Router} from '@angular/router' ;

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
  private isLogged:boolean = this.ngRedux.getState().isLogged;

  constructor(private loginService:LoginService,
              public dialog: MdDialog,
              private ngRedux: NgRedux<AppState>,
              private actionCreator:ActionCreatorService) {
  }

  ngOnInit() {
    this.setupIsLogged();
  }

  //TODO separate this logic to seervice
  //adding changing islogged value
  private setupIsLogged(){
    this.isLogged = this.ngRedux.getState().isLogged;
    this.ngRedux.select('isLogged').subscribe(val=>{
      if (!val) {
        let parentRouter = Router;
        parentRouter['navigateByUrl']('/welcome');
      }
      this.isLogged =  !!val;
    })
  }

  openLoginDialogue(){
    this.dialog.open(LoginDialog,{width:'40%',height:'40%'})
  }

  logout(){
    this.loginService.logout();
  }
}
