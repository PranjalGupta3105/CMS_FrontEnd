import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-interviews',
  templateUrl: './view-interviews.component.html',
  styleUrls: ['./view-interviews.component.css']
})
export class ViewInterviewsComponent implements OnInit {

  interviewsarray: [];

  constructor(private apiService: ApiService) {}

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
}
