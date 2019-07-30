import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { UpdateInterviewsComponent } from '../update-interviews/update-interviews.component';

@Component({
  selector: 'app-view-interviews',
  templateUrl: './view-interviews.component.html',
  styleUrls: ['./view-interviews.component.css'],
  providers: [UpdateInterviewsComponent]
  // https://stackoverflow.com/questions/37587732/how-to-call-another-components-function-in-angular2
})
export class ViewInterviewsComponent implements OnInit {

  interviewsarray: [];

  constructor(private apiService: ApiService, private updateInterview: UpdateInterviewsComponent) {}
  // , private updateInterview: UpdateInterviewsComponent

  ngOnInit() 
  {
    
  }

  public getAllInterviews()
  {
    this.apiService.GetAllScheduledInterviews().subscribe((data)=>
    {
      // Getting the Interviews JSON array
      this.interviewsarray =  JSON.parse(JSON.stringify(data))["interviews"];
      console.log(this.interviewsarray);
      
    });

  }
  public updateInterviewDetails(interview){

    this.updateInterview.setInterviewValues(interview);
  }

  public deleteInterviewDetails(interviewId){
     
    this.apiService.DeleteInterviewDetails(interviewId).subscribe((data)=>{
      console.log(data);
      
    });
  }
}
