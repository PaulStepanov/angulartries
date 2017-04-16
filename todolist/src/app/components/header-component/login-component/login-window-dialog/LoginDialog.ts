import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../../../servicies/LoginService";

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
  constructor(private loginService:LoginService,) {
  }

  ngOnInit() {
  }

  submit(username,password){
    this.loginService.login(username,pageXOffset).subscribe(isLogged=>{

    })
  }
}
