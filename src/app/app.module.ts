import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobApplicationListComponent } from './job-application-list/job-application-list.component';
import { CreateJobApplicationComponent } from './create-job-application/create-job-application.component';
import { FormsModule } from '@angular/forms';
import { UpdateJobApplicationComponent } from './update-job-application/update-job-application.component';

@NgModule({
  declarations: [
    AppComponent,
    JobApplicationListComponent,
    CreateJobApplicationComponent,
    UpdateJobApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
