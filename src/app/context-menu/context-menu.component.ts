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
      this.router.navigate(["register-interview"]);
    }

    public ViewAllScheduledInterviews()
    {
      this.router.navigate(["view-interviews"]);
    }

    public UpdateAnInterviewSchedule()
    {
      this.router.navigate(["update-interview"]);
    }
  
}
