import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // constructor() { }

  // ngOnInit() {
  // }
  title = 'Career Master';
  tokenvalue: string;
  token;

  constructor(private apiService: ApiService,private router: Router,private cookieService: CookieService){}

  ngOnInit()
  { }
  
  public AuthenticateUser(username, password)
  {
    console.log("Button Clicked"+"Did you just entered the username as "+username+" and password as "+password);
    
    this.apiService.ValidateRequestedAuthentication(username, password).subscribe((data)=>{
    this.tokenvalue = JSON.stringify(data);
    this.cookieService.set("AuthToken",this.tokenvalue);
    console.log("Saved Cookie in the Browser"+this.cookieService.get("AuthToken"));
    
    console.log(data);
    if(data != null)
    {
      this.router.navigate(["context-menu"]);
    }
    });
  }
   
}
