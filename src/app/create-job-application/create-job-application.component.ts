import { componentFactoryName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobApplication } from '../job-application';
import { JobApplicationService } from '../job-application.service';

@Component({
  selector: 'app-create-job-application',
  templateUrl: './create-job-application.component.html',
  styleUrls: ['./create-job-application.component.css']
})
export class CreateJobApplicationComponent implements OnInit {

  jobApplication: JobApplication = new JobApplication(0,'','','','');

  constructor(private jobApplicationService: JobApplicationService, private router: Router) {
  }

  ngOnInit(): void {

  }

  saveJobApplication(){
    this.jobApplicationService.createJobApplication(this.jobApplication).subscribe(data => {
      console.log(data);
      this.goToJobApplicationList();
    }, error => {console.log(error);});
  }

  goToJobApplicationList(){
    this.router.navigate(['/jobApplications']);
  }

  onSubmit(){
    console.log(this.jobApplication);
    this.saveJobApplication();
  }

}
