import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobListingService {
  // Inject without constructor
  private http = inject(HttpClient);

  // You can also inject multiple services
  // private router = inject(Router);
  // private activatedRoute = inject(ActivatedRoute);

  getJobs() {
    return this.http.get('https://jsonfakery.com/jobs');
  }
}
