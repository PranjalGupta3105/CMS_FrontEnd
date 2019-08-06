import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  public UpdatePassword(email, phoneno, password, cnfrmpassword){
    if(password==cnfrmpassword)
    {
      this.apiService.UpdateUserPassword(email, phoneno, password).subscribe((data)=>{
        console.log(data);
      });
    }
  }
}
