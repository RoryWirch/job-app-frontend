import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateJobApplicationComponent } from './create-job-application/create-job-application.component';
import { JobApplicationListComponent } from './job-application-list/job-application-list.component';

const routes: Routes = [
  {path: 'jobApplications', component: JobApplicationListComponent},
  {path: 'create-job-application', component: CreateJobApplicationComponent},
  {path: '', redirectTo: 'jobApplications', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
