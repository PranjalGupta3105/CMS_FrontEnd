import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { ViewInterviewsComponent } from './view-interviews/view-interviews.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: "", component: LoginComponent
  },
  {
    path: "context-menu", component: ContextMenuComponent
  },
  {
    path: "view-interviews", component: ViewInterviewsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
