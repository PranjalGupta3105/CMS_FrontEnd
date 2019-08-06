import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  username: String;
  password: String;
  email: String;
  phoneno: String;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }

  public RegisterNewUser(username, password, email, phoneno)
  {
    this.apiService.RegisterUser(username, password, email, phoneno).subscribe((data)=>{
      console.log(data);
      var registeredUserId = JSON.parse(JSON.stringify(data))["UserId"];
      if(registeredUserId != null){
        this.router.navigate(["login"]);
      }
    });
  }
}
