import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { RegisterInterviewsComponent } from './register-interviews/register-interviews.component';
import { ViewInterviewsComponent } from './view-interviews/view-interviews.component';
import { UpdateInterviewsComponent } from './update-interviews/update-interviews.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: "", component: LoginComponent
  },
  {
    path: "context-menu", component: ContextMenuComponent
  },
  {
    path: "register-interview", component: RegisterInterviewsComponent
  },
  {
    path: "view-interviews", component: ViewInterviewsComponent
  },
  {
    path: "update-interview", component: UpdateInterviewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
