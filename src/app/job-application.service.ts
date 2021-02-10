import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobApplication } from './job-application';

@Injectable({
  providedIn: 'root'
})
export class JobApplicationService {

  private baseURL = "http://localhost:8080/api/v1/jobApplications";

  constructor(private httpClient: HttpClient) { }

  getJobApplicationsList(): Observable<JobApplication[]> {
    return this.httpClient.get<JobApplication[]>(`${this.baseURL}`);
  }

  createJobApplication(jobApplication: JobApplication): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, jobApplication);
  }
}
