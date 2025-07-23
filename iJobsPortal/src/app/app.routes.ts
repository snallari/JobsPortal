import { Routes } from '@angular/router';
import { JobListing } from './components/job-listing/job-listing';

export const routes: Routes = [
    {
        path: '',
        component: JobListing,
        title: 'Job Listings'
    }
];
