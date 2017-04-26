import {Injectable, OnInit} from '@angular/core';
import {ajax} from 'rxjs/observable/dom/ajax';
import {Subject,Observable} from 'rxjs'
import {ActionCreatorService} from "./ActionCreatorService";

/**
 * This service works change global store variable isLogged
 * */
@Injectable()
export class LoginService{
  private _isLogged:boolean = false;

  constructor(private actionCreatorService:ActionCreatorService ) {
    ajax({
      url: '/user/id',
      method: 'get'
    })
      .subscribe(resp=>{
        if (resp.status==200) {
          this.actionCreatorService.login();//if user is already logged on server setup isLogged variable to true
        }
      })
  }


  //Returns an observable which return true when user logged and false whe error was occurred
  //and emmit login and logout action
  login(username,password):Observable<boolean>{
    let retSubj = new Subject();
    ajax({
      url: '/login',
      method: 'post',
      responseType: 'json',
      body:{
        username:username,
        password:password
      }
  }).subscribe(resp=>{
      if (resp.status == 200) {
        retSubj.next(true);
        this.actionCreatorService.login();//submitting login caction
      } else {
        //TODO: Add login error here
        retSubj.next(false)
      }
    });
    return retSubj.asObservable();
  }

  logout():Observable<boolean>{
    let retSubj = new Subject();
    ajax({
      url: '/logout',
      method: 'get'
    })
      .subscribe(resp=>{
        if (resp.status == 200) {
          retSubj.next(true);
          this.actionCreatorService.logout();//submitting login caction
        } else {
          //TODO: Add login error here
          retSubj.next(false)
        }
      });
    return retSubj;
  }
}
