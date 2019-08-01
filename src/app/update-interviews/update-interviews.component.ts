import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update-interviews',
  templateUrl: './update-interviews.component.html',
  styleUrls: ['./update-interviews.component.css']
})
export class UpdateInterviewsComponent implements OnInit {

  constructor(private router: Router, private apiService: ApiService) { }
  
  ngcompanyname : string ;

  ngOnInit() {
  }

  public setInterviewValues(interviewToBeUpdated)
  {
    
    // this.ngcompanyname = interviewToBeUpdated["Company"];
    this.router.navigate(["update-interview"]);

    console.log("I am inside Update Interview Component "+"\n"+"Values for the Interview to be Updated are:"+"\n");
    // console.log(interviewToBeUpdated);
    //console.log(interviewToBeUpdated["Company"]);
    
    //console.log(this.ngcompanyname);
  
    
    console.log("Did it hit here");

    this.apiService.GetInterviewById(interviewToBeUpdated["_id"]).subscribe((data)=>{
    console.log(data);
    this.ngcompanyname = data["Company"];      
    });
    
    // document.getElementById("companyloaction").innerHTML = interviewToBeUpdated["Location"];
    // document.getElementById("companytype").innerHTML = interviewToBeUpdated["Type"];
    // document.getElementById("offeredrole").innerHTML = interviewToBeUpdated["Offered_Role"];
    // document.getElementById("expectedexperience").innerHTML = interviewToBeUpdated["Required_Experience"];
    // document.getElementById("noticeperiod").innerHTML = interviewToBeUpdated["Notice_Period"];
    // document.getElementById("payscale").innerHTML = interviewToBeUpdated["Pay_Scale"];
    // document.getElementById("companyrating").innerHTML = interviewToBeUpdated["Company_Rating"];
    // document.getElementById("interviewvenue").innerHTML = interviewToBeUpdated["Interview_Venue"];
    // document.getElementById("interviewdate").innerHTML = interviewToBeUpdated["Interview_Date"];
    // document.getElementById("contactperson").innerHTML = interviewToBeUpdated["Contact_Person"];
    // document.getElementById("contactpersonemail").innerHTML = interviewToBeUpdated["Contact_Person_Email"];
    // document.getElementById("contactpersonphone").innerHTML = interviewToBeUpdated["Contact_Person_Phone"];


  }

}
