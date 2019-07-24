import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Career Master';
  token;

  constructor(private apiService: ApiService){}

  // AuthenticateUser(username, password)
  // {
  //   console.log("Button Clicked"+"Did you just entered the username as "+username+" and password as "+password);
    
  //   this.verifyUser()
  // }
  // verifyUser()
  // {
    ngOnInit(){
    this.apiService.ValidateRequestedAuthentication().subscribe((data)=>{
      console.log(data);
    });
  }
   // });
  //}
}
