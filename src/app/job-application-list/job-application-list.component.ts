import { Component, OnInit } from '@angular/core';
import { JobApplication } from '../job-application';
import { JobApplicationService } from '../job-application.service';

@Component({
  selector: 'app-job-application-list',
  templateUrl: './job-application-list.component.html',
  styleUrls: ['./job-application-list.component.css']
})
export class JobApplicationListComponent implements OnInit {

  jobApplications: JobApplication[] | undefined;

  constructor(private jobApplicationService: JobApplicationService) { }

  ngOnInit(): void {
    this.getJobApplications()
  }

  private getJobApplications() {
    this.jobApplicationService.getJobApplicationsList().subscribe( data => {
      this.jobApplications = data;
    })
  }

}
