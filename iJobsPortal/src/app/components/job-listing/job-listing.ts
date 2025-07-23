import { Component, inject, OnInit } from '@angular/core';
import { JobListingService } from '../job-listing';
import { CommonModule } from '@angular/common';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-job-listing',
  imports: [CommonModule],
  templateUrl: './job-listing.html',
  styleUrl: './job-listing.css'
})
export class JobListing implements OnInit {
  private jobService = inject(JobListingService);
  public loadingService = inject(LoadingService);
  
  jobs = {
    jobsList: [] as any[],
    error: null as string | null
  };

  ngOnInit() {
    this.jobService.getJobs().subscribe({
      next: (jobs: any) => {
        this.jobs.jobsList = Array.isArray(jobs) ? jobs : [jobs];
        this.jobs.error = null;
      },
      error: (err: any) => {
        this.jobs.error = err.message || 'Failed to load jobs';
        console.error('Error loading jobs:', err);
      }
    });
  }
}
