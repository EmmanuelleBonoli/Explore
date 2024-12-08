import { TestBed } from '@angular/core/testing';

import { ActivitiesFacadeService } from './activities-facade.service';

describe('ActivitiesFacadeService', () => {
  let service: ActivitiesFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivitiesFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
