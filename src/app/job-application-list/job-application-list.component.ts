import { Component, OnInit } from '@angular/core';
import { JobApplication } from '../job-application';
import { JobApplicationService } from '../job-application.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-application-list',
  templateUrl: './job-application-list.component.html',
  styleUrls: ['./job-application-list.component.css']
})
export class JobApplicationListComponent implements OnInit {

  jobApplications: JobApplication[] = [];

  constructor(private jobApplicationService: JobApplicationService,
    private router: Router) { }

  ngOnInit(): void {
    this.getJobApplications()
  }

  private getJobApplications() {
    this.jobApplicationService.getJobApplicationsList().subscribe( data => {
      this.jobApplications = data;
    });
  }

  updateJobApplication(id: number){
    this.router.navigate(['update-job-application', id]);
  }

}
