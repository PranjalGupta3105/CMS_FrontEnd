import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register-interviews',
  templateUrl: './register-interviews.component.html',
  styleUrls: ['./register-interviews.component.css']
})
export class RegisterInterviewsComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {}

  public registerInterview(companyname, companylocation, companytype, role, expexperience, noticeperiod, payscale, rating, venue, interviewdate, contactperson, contactpersonemail, contactpersonphone)
  {
    var registerInterviewJSON = {
      "Company": companyname,
      "Location": companylocation,
      "Type": companytype,
      "Offered_Role": role,
      "Required_Experience": expexperience,
      "Notice_Period": parseInt(noticeperiod),
      "Pay_Scale": parseInt(payscale),
      "Company_Rating": rating,
      "Interview_Venue": venue,
      "Interview_Date": interviewdate,
      "Contact_Person": contactperson,
      "Contact_Person_Email": contactpersonemail,
      "Contact_Person_Phone": contactpersonphone
  }

  console.log(registerInterviewJSON);
  

  this.apiService.AddNewInterview(registerInterviewJSON).subscribe((data)=>{
    console.log("Response Received",data); 
  });

  }

}
