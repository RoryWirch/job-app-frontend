import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateJobApplicationComponent } from './create-job-application/create-job-application.component';
import { JobApplicationListComponent } from './job-application-list/job-application-list.component';
import { UpdateJobApplicationComponent } from './update-job-application/update-job-application.component';

const routes: Routes = [
  {path: 'jobApplications', component: JobApplicationListComponent},
  {path: 'create-job-application', component: CreateJobApplicationComponent},
  {path: '', redirectTo: 'jobApplications', pathMatch: 'full'},
  {path: 'update-job-application/:id', component: UpdateJobApplicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
