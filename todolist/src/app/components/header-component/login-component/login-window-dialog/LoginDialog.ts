import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../../../servicies/LoginService";
import {NgRedux} from "@angular-redux/store";
import {ActionCreatorService} from "../../../../servicies/ActionCreatorService";
import {AppState} from "../../../../store/AppState";

/**
 * Login window dialogue
 * */
@Component({
  moduleId: module.id,
  selector: 'app-dialog-login',
  templateUrl: 'loginDialog.html',
  styleUrls: ['loginDialog.css']
})
export class LoginDialog implements OnInit {
  constructor(private loginService:LoginService,
              private ngRedux: NgRedux<AppState>,
              private actionCreator:ActionCreatorService) {
  }

  ngOnInit() {
  }

  submit(username,password){
    this.loginService.login(username,password).subscribe(isLogged=>{
      if (isLogged) {
        this.actionCreator.login()
      } else {
        this.actionCreator.logout()
      }
    })
  }
}
