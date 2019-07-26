import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

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

  constructor(private apiService: ApiService,private router: Router){}

  ngOnInit()
  { }
  
  public AuthenticateUser(username, password)
  {
    console.log("Button Clicked"+"Did you just entered the username as "+username+" and password as "+password);
    
    this.apiService.ValidateRequestedAuthentication(username, password).subscribe((data)=>{
    this.tokenvalue = JSON.stringify(data);
    console.log(data);
    if(data != null)
    {
      this.router.navigate(["context-menu"]);
    }
    });
  }
  //   ngOnInit(){
  //   this.apiService.ValidateRequestedAuthentication().subscribe((data)=>{
  //     console.log(data);
  //   });
  // }
   
}
