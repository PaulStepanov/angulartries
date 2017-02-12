import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from '../components/app.component';
import { AboutComponent} from '../components/app.about'

const routes: Routes = [
  { path: '', component: AppComponent },
  {path:'about', component:AboutComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }

export const routedComponents = [AppComponent,AboutComponent];
