import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobApplication } from '../job-application';
import { JobApplicationService } from '../job-application.service';

@Component({
  selector: 'app-update-job-application',
  templateUrl: './update-job-application.component.html',
  styleUrls: ['./update-job-application.component.css']
})
export class UpdateJobApplicationComponent implements OnInit {
  id: number = 0;
  jobApplication: JobApplication = new JobApplication(0,'','','','');

  constructor(private jobApplicationService: JobApplicationService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.jobApplicationService.getJobApplicationById(this.id).subscribe(data => {
      this.jobApplication = data;
    }, error => console.log(error));
  }

  updateJobApplication(){
    this.jobApplicationService.updateJobApplication(this.id, this.jobApplication).subscribe(data =>{
      console.log(data);
      this.goToJobApplicationList();
    }, error => console.log(error));
  }

  onSubmit(){
    console.log(this.jobApplication);
    this.updateJobApplication();
  }

  goToJobApplicationList(){
    this.router.navigate(['/jobApplications']);
  }
}
