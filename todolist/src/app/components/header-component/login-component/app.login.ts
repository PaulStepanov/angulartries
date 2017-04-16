import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../../servicies/LoginService";

@Component({
  moduleId: module.id,
  selector: 'app-login-button',
  templateUrl: 'app.login.html',
  styleUrls: ['app.login.css']
})
export class LoginComponent implements OnInit {
  private userName:string;
  private isLogged:boolean = false;

  constructor(private loginService:LoginService) {
  }

  ngOnInit() {
  }

  logout(){
    this.loginService.logout();
  }
}
