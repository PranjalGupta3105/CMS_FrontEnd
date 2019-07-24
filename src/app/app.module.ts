import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterInterviewsComponent } from './register-interviews/register-interviews.component';
import { ViewInterviewsComponent } from './view-interviews/view-interviews.component';
import { UpdateInterviewsComponent } from './update-interviews/update-interviews.component';
import { DeleteInterviewsComponent } from './delete-interviews/delete-interviews.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterInterviewsComponent,
    ViewInterviewsComponent,
    UpdateInterviewsComponent,
    DeleteInterviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
