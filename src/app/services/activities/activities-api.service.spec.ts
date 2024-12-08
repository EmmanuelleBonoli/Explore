import { TestBed } from '@angular/core/testing';

import { ActivitiesApiService } from './activities-api.service';

describe('ActivitiesApiService', () => {
  let service: ActivitiesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivitiesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
