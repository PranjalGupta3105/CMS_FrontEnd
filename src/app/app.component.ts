import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Career Master';
  tokenvalue: string;
  token;

  constructor(private apiService: ApiService){}

  public AuthenticateUser(username, password) : void
  {
    console.log("Button Clicked"+"Did you just entered the username as "+username+" and password as "+password);
    
    this.apiService.ValidateRequestedAuthentication(username, password).subscribe((data)=>{
    this.tokenvalue = JSON.stringify(data);
    console.log(data);
    
    });

  }

  
  //   ngOnInit(){
  //   this.apiService.ValidateRequestedAuthentication().subscribe((data)=>{
  //     console.log(data);
  //   });
  // }
   
}
