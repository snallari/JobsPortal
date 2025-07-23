import { TestBed } from '@angular/core/testing';

import { JobListingService } from './job-listing';

describe('JobListingService', () => {
  let service: JobListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
