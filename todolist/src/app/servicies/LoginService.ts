import {Injectable} from '@angular/core';
import {ajax} from 'rxjs/observable/dom/ajax';
import {Subject,Observable} from 'rxjs'

@Injectable()
export class LoginService {

  constructor() {
  }

  //Returns an observable which return true when user logged and false whe error was occurred
  login(username,password):Observable<boolean>{
    let retSubj = new Subject();
    ajax({
      url: '/tasks/add',
      method: 'post',
      responseType: 'json',
      body:{
        username:username,
        password:password
      }
  }).subscribe(resp=>{
      if (resp.status == 200) {
        retSubj.next(true)
      } else {
        retSubj.next(false)
      }
    });
    return retSubj.asObservable();
  }

  logout(){

  }
}
