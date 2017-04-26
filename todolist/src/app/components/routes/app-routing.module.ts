import {NgModule}             from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router';
import {AppTasksComponent} from "../task-component/tasks/app.tasks";
import {NgRedux} from "@angular-redux/store";
import {AppState} from "../../store/AppState";
import {WelcomeComponent} from "../welcom-component/welcome";

const routes: Routes = [
  { path: '',  component: AppTasksComponent},
  { path: 'welcome', component: WelcomeComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

  constructor(private ngRedux: NgRedux<AppState>,
              private router: Router){
    this.ngRedux.select('isLogged').subscribe(val=> {
      if (!val) {
        let parentRouter = Router;
        this.router['navigateByUrl']('/welcome');
      } else {
        let parentRouter = Router;
        this.router['navigateByUrl']('/');
      }
    })
  }

}
