import { TestBed } from '@angular/core/testing';

import { DataActivitiesService } from './data-activities.service';

describe('DataActivitiesService', () => {
  let service: DataActivitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataActivitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
