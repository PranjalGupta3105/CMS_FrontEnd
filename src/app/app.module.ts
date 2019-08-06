import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';
import { RegisterInterviewsComponent } from './register-interviews/register-interviews.component';
import { ViewInterviewsComponent } from './view-interviews/view-interviews.component';
import { UpdateInterviewsComponent } from './update-interviews/update-interviews.component';
import { DeleteInterviewsComponent } from './delete-interviews/delete-interviews.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterInterviewsComponent,
    ViewInterviewsComponent,
    UpdateInterviewsComponent,
    DeleteInterviewsComponent,
    ContextMenuComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
