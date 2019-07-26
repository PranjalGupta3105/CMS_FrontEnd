import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css']
})
export class ContextMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

    public CreateAnInterviewSchedule()
    {
        // Code to Inject the "Create an Interview Schedule"
    }

    public ViewAllScheduledInterviews()
    {
      this.router.navigate(["view-interviews"]);
      // Code to Inject the "View all Interview Schedule"
    }

    public UpdateAnInterviewSchedule()
    {
        // Code to Inject the "Update an Interview Schedule"
    }
  

}
